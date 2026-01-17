#!/usr/bin/env python3
"""
Simple HTTP server for serving the Student Council website.

Usage:
    1. First build the site: npm run build
    2. Then run this server: python server.py
    3. Open http://localhost:8000 in your browser

For development, use: npm run dev (runs on http://localhost:3000)
"""

import http.server
import socketserver
import os
import webbrowser
from pathlib import Path

PORT = 8000
DIRECTORY = "out"  # Next.js static export directory

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def end_headers(self):
        # Add CORS headers for local development
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        super().end_headers()

def main():
    # Check if the 'out' directory exists
    if not Path(DIRECTORY).exists():
        print("=" * 50)
        print("  ERROR: 'out' directory not found!")
        print("=" * 50)
        print()
        print("  Please build the site first:")
        print("    1. Run: npm install")
        print("    2. Run: npm run build")
        print("    3. Then run this server again: python server.py")
        print()
        print("  For development with hot reload, use:")
        print("    npm run dev")
        print()
        return

    print("=" * 50)
    print("  Because We Are TK - Student Council Website")
    print("=" * 50)
    print()

    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        url = f"http://localhost:{PORT}"
        print(f"  Server running at: {url}")
        print()
        print("  Press Ctrl+C to stop the server")
        print("=" * 50)

        # Try to open browser automatically
        try:
            webbrowser.open(url)
        except:
            pass

        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n\n  Server stopped. Goodbye! 👋")

if __name__ == "__main__":
    main()
