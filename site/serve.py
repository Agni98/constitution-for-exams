"""Local server for the site, with caching turned off.

python -m http.server lets the browser cache index.html, so an edited page keeps
loading the old shell until you force-refresh. This sends no-store on every
response, which means a normal F5 always shows the current files.

    python serve.py            # then open http://localhost:8770
    python serve.py 9000       # a different port

The site also opens fine by double-clicking index.html - all data ships as .js
files rather than JSON precisely so that file:// works.
"""
import os
import socket
import sys
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path

# On Windows, SO_REUSEADDR lets a second server bind a port that is already in
# active use. You then get two servers on one port and requests go to whichever
# wins the race - which looks exactly like the site "not working". Turn it off
# there so a clash is detected and the fallback below picks another port.
# On POSIX it means something else entirely (it skips TIME_WAIT), so keep it.
REUSE = os.name != "nt"


class NoCacheHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Cache-Control", "no-store, no-cache, must-revalidate, max-age=0")
        self.send_header("Pragma", "no-cache")
        self.send_header("Expires", "0")
        super().end_headers()

    def log_message(self, fmt, *args):          # keep the console readable
        if "200" not in (args[1] if len(args) > 1 else ""):
            super().log_message(fmt, *args)


class DualStackServer(ThreadingHTTPServer):
    """Listen on IPv6 and IPv4 at the same time.

    Binding IPv4 only breaks any client that resolves "localhost" to ::1 first.
    """

    address_family = socket.AF_INET6
    request_queue_size = 64
    daemon_threads = True
    allow_reuse_address = REUSE

    def server_bind(self):
        self.socket.setsockopt(socket.IPPROTO_IPV6, socket.IPV6_V6ONLY, 0)
        return super().server_bind()


class SingleStackServer(ThreadingHTTPServer):
    """IPv4 fallback for boxes without an IPv6 stack."""

    daemon_threads = True
    allow_reuse_address = REUSE


def bind(port):
    """Bind one port, preferring dual-stack. Returns (server, description)."""
    root = Path(__file__).resolve().parent
    handler = partial(NoCacheHandler, directory=str(root))
    try:
        return DualStackServer(("::", port), handler), "IPv6 + IPv4"
    except OSError as e:
        if e.errno in (98, 10048, 10013):            # in use, or refused
            raise
        # no IPv6 stack on this box
        return SingleStackServer(("0.0.0.0", port), handler), "IPv4 only"


if __name__ == "__main__":
    want = int(sys.argv[1]) if len(sys.argv) > 1 else 8770
    root = Path(__file__).resolve().parent

    # Another site may already hold the port - this machine also runs one on
    # 8765 - so step forward rather than dying with a stack trace.
    server = None
    for port in range(want, want + 12):
        try:
            server, where = bind(port)
            break
        except OSError:
            print("  port %d is busy, trying %d" % (port, port + 1))
    if server is None:
        print("Could not find a free port between %d and %d." % (want, want + 11))
        sys.exit(1)

    if port != want:
        print("\n  NOTE: port %d was taken, so this is on %d instead." % (want, port))
    print("\nServing %s  (%s)\n\n  http://localhost:%d\n\n  Ctrl+C to stop\n"
          % (root, where, port))
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nStopped.")
