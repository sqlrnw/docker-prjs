✅ What I Built

Built a production-like web architecture using Docker and Docker Compose.

Created a Next.js application (App Router) with:

Regular pages

An Admin page

API Routes

Implemented a multi-stage Docker build to separate build-time and runtime concerns.

Used Nginx as a reverse proxy and made it the single entry point to the application.

Exposed only Nginx to the host while keeping Next.js internal.

Connected services using Docker bridge networking and internal DNS (service names).

Configured path-based routing in Nginx for pages and API endpoints.

🧠 What I Learned

How a reverse proxy works in real production setups.

How Docker networking enables service-to-service communication without exposing ports.

The practical difference between ports and expose in Docker Compose.

How Docker internal DNS resolves services by name instead of IP.

Why multi-stage Dockerfiles are essential for production images.

How Nginx location matching works and how it affects routing.

How trailing slashes and redirects can cause production bugs and redirect loops.

How to debug containerized applications using curl and logs, not just the browser.

How to think and debug with a production mindset, not a development one.
