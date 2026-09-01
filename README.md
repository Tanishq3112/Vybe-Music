[README.md](https://github.com/user-attachments/files/31695966/README.md)
# 🎵 VYBE --- AI Music Streaming Platform

```{=html}
<p align="center">
```
`<strong>`{=html}A modern, full-stack music streaming experience with
AI-powered discovery, real-time artist media, and a dedicated Android
app.`</strong>`{=html}
```{=html}
</p>
```
```{=html}
<p align="center">
```
`<img src="https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white" alt="React 19">`{=html}
`<img src="https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white" alt="Vite 8">`{=html}
`<img src="https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?logo=tailwindcss&logoColor=white" alt="Tailwind CSS v4">`{=html}
`<img src="https://img.shields.io/badge/Express-5-000000?logo=express&logoColor=white" alt="Express 5">`{=html}
`<img src="https://img.shields.io/badge/Android-APK-3DDC84?logo=android&logoColor=white" alt="Android APK">`{=html}
`<img src="https://img.shields.io/badge/MongoDB-Database-47A248?logo=mongodb&logoColor=white" alt="MongoDB">`{=html}
```{=html}
</p>
```

------------------------------------------------------------------------

## ✨ Overview

**VYBE** is a full-stack AI-powered music streaming application designed
to provide a polished desktop and mobile listening experience.

The platform combines a modern React frontend, an Express backend,
MongoDB persistence, AI-assisted music discovery, and a dedicated
Android application shell. It supports real music playback, artist
discovery, authentication, background audio, and mobile-first
navigation.

### What makes VYBE different?

-   🎧 Full-length master audio streaming
-   🤖 AI-assisted music discovery and search
-   🧠 Natural-language music search
-   🖼️ Live HD artist portraits
-   📱 Dedicated Android application
-   🔐 Email + OTP authentication
-   🔊 Background playback and lockscreen controls
-   🗄️ MongoDB with an embedded fallback for easier setup
-   🚀 GitHub Actions-based Android APK distribution

------------------------------------------------------------------------

# 🎨 Tech Stack

  Layer            Technology
  ---------------- ---------------------------------------------------
  Frontend         React 19
  Build Tool       Vite 8
  Styling          Tailwind CSS v4
  Backend          Express 5
  Database         MongoDB
  Mobile           Android / APK
  Authentication   Email + 6-digit OTP
  Artist Media     Deezer + Wikipedia Open Media
  CI/CD            GitHub Actions
  AI               AI-powered Music Studio & natural-language search

------------------------------------------------------------------------

# ✨ Feature Highlights

## 🎧 Full-Length Master Audio Streaming

VYBE is designed around real, full-length music playback rather than
short previews.

The application uses a **dual-engine audio architecture** that provides
flexibility when resolving and streaming available master audio sources.

Key capabilities include:

-   Full-length track playback
-   Play / pause / seek controls
-   Queue management
-   Previous / next track navigation
-   Persistent player state
-   Seamless track transitions
-   Desktop and mobile playback support

------------------------------------------------------------------------

## 🖼️ Live HD Artist Portraits

Artist pages dynamically retrieve high-quality artist imagery using a
combination of:

-   **Deezer artist metadata**
-   **Wikipedia open media**

This allows the application to display rich artist profiles without
requiring a manually maintained image database.

------------------------------------------------------------------------

## 📱 Dedicated Android App

VYBE includes a dedicated Android application shell optimized for mobile
use.

The mobile experience includes a **5-tab navigation system** for quick
access to the major areas of the application.

Typical navigation includes:

1.  🏠 Home
2.  🔎 Search
3.  🎵 Library
4.  🤖 AI Music Studio
5.  👤 Profile

The Android layer allows the web application to be packaged and
distributed as an installable APK while retaining the VYBE interface and
functionality.

------------------------------------------------------------------------

## 🔊 Background Audio & Lockscreen Controls

Music playback continues while the user navigates away from the
application or locks the device.

The Android implementation is designed to support:

-   Background audio playback
-   Media session integration
-   Lockscreen playback controls
-   Play / pause controls
-   Track navigation
-   Persistent playback state

This provides a more traditional music-player experience on Android.

------------------------------------------------------------------------

## 🔐 Email Sign-Up + OTP Verification

VYBE supports real email-based account registration.

The authentication flow includes:

1.  User enters registration information.
2.  A **6-digit OTP** is generated.
3.  The OTP is sent to the user's email.
4.  The user verifies the OTP.
5.  The account is activated.
6.  The user can sign in normally.

This provides an additional verification layer instead of relying only
on a simple client-side registration flow.

> **Security note:** Never commit production credentials, API keys,
> database passwords, or email-service secrets to GitHub.

------------------------------------------------------------------------

## 🤖 AI Music Studio

The **AI Music Studio** adds an intelligent layer on top of traditional
music discovery.

It is designed to support AI-assisted experiences such as:

-   Natural-language music discovery
-   Mood-based requests
-   Genre exploration
-   Context-aware recommendations
-   Intelligent music queries
-   AI-assisted playlist discovery

Instead of requiring users to know the exact song or artist name,
natural language can be used to describe what they want to hear.

**Example:**

> "Play energetic songs for a late-night coding session."

------------------------------------------------------------------------

## 🔎 Natural-Language Search

VYBE extends traditional keyword search with natural-language
interaction.

Users can express intent rather than relying exclusively on exact titles
or artist names.

For example:

-   "Songs similar to this one"
-   "Give me relaxing instrumental music"
-   "Play some energetic rock"
-   "Music for studying"

The search layer can then interpret the request and map it to the
available music catalogue.

------------------------------------------------------------------------

## 🗄️ Zero-Config MongoDB Fallback

VYBE is designed to reduce setup friction for developers.

When a standard MongoDB configuration is unavailable, the project can
use its **embedded MongoDB engine fallback**, allowing development and
demonstration environments to get running with less manual database
configuration.

For production deployments, a properly configured external MongoDB
deployment is recommended.

------------------------------------------------------------------------

# 📱 Android APK & Distribution Guide

## Download the Compiled APK

The compiled debug APK is approximately:

**`app-debug.apk` --- 4.36 MB**

After a GitHub Actions build, the APK can be distributed through GitHub
Releases or downloaded from the workflow artifacts.

> The exact download location depends on the release/workflow
> configuration of the repository.

------------------------------------------------------------------------

## Build the Android APK Locally

From the project root:

``` bash
npm install
npm run build:android
```

The command prepares the web application and builds/synchronizes the
Android package according to the project's Android configuration.

After the build completes, the generated APK can be located inside the
Android build output directories.

------------------------------------------------------------------------

## Open the Android Project

To open the generated Android project in the native Android development
environment:

``` bash
npm run open:android
```

This is useful when you need to:

-   Inspect native Android configuration
-   Configure signing
-   Test on an emulator/device
-   Prepare a release build
-   Configure Google Play distribution

------------------------------------------------------------------------

## Google Play Store Submission

For Google Play distribution, the debug APK should **not** be treated as
the final production artifact.

A production release should be:

1.  Built using the appropriate release configuration.
2.  Signed with a secure production signing key.
3.  Tested on physical Android devices.
4.  Verified against Android/Play Store requirements.
5.  Packaged as the appropriate Play Store release format.
6.  Uploaded through Google Play Console.

Keep signing keys and credentials outside the repository.

------------------------------------------------------------------------

# 🤖 GitHub Actions CI/CD

VYBE can use GitHub Actions to automate Android builds and APK
distribution.

### Typical workflow

``` text
Developer pushes code
        │
        ▼
GitHub Repository
        │
        ▼
GitHub Actions Workflow
        │
        ├── Install dependencies
        ├── Build web application
        ├── Synchronize Android project
        ├── Compile Android APK
        └── Upload APK
                │
                ▼
        GitHub Actions Artifact
                │
                ▼
        GitHub Release
```

## Recommended Workflow

A GitHub Actions workflow can be configured to run when code is pushed
to `main`.

A typical workflow performs:

``` text
Checkout repository
        ↓
Setup Node.js
        ↓
Install npm dependencies
        ↓
Build VYBE
        ↓
Build Android package
        ↓
Generate app-debug.apk
        ↓
Upload APK as workflow artifact
        ↓
Publish release asset
```

### Example workflow location

``` text
.github/
└── workflows/
    └── android-build.yml
```

### Example workflow concept

``` yaml
name: Build Android APK

on:
  push:
    branches:
      - main
  workflow_dispatch:

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm

      - name: Install dependencies
        run: npm ci

      - name: Build Android APK
        run: npm run build:android

      - name: Upload APK
        uses: actions/upload-artifact@v4
        with:
          name: vybe-android-apk
          path: "**/app-debug.apk"
```

> Adjust the Node.js version, Android/Java setup, build command, and APK
> path to match the exact project configuration.

------------------------------------------------------------------------

# 📁 Project Structure

The following structure represents the major application modules:

``` text
Vybe-Music/
│
├── client/                         # React frontend
│   ├── src/
│   │   ├── components/             # Reusable UI components
│   │   ├── pages/                  # Application pages
│   │   ├── services/               # API/music services
│   │   ├── hooks/                  # React hooks
│   │   └── ...
│   ├── public/                     # Static frontend assets
│   └── ...
│
├── server/                         # Express backend
│   ├── controllers/                # Request controllers
│   ├── routes/                     # API routes
│   ├── models/                     # Database models
│   ├── services/                   # Business/API services
│   └── ...
│
├── android/                        # Android application module
│   ├── app/
│   ├── gradle/
│   └── ...
│
├── .github/
│   └── workflows/                  # CI/CD automation
│
├── package.json                    # Root scripts & dependencies
├── vite.config.*                   # Vite configuration
├── tailwind.config.*               # Tailwind configuration (if used)
├── README.md                       # Project documentation
└── ...
```

> Directory names can vary slightly depending on the current
> implementation. The architecture is intentionally separated into
> frontend, backend, Android, and automation layers.

------------------------------------------------------------------------

# 🏗️ Architecture

``` text
                         ┌───────────────────────┐
                         │       VYBE USER       │
                         └───────────┬───────────┘
                                     │
                    ┌────────────────┴────────────────┐
                    │                                 │
                    ▼                                 ▼
          ┌─────────────────┐              ┌─────────────────┐
          │   Web Client    │              │  Android Shell  │
          │   React 19      │              │     Android     │
          │   Vite 8        │              │   5-tab UI      │
          └────────┬────────┘              └────────┬────────┘
                   │                                │
                   └───────────────┬────────────────┘
                                   ▼
                         ┌─────────────────────┐
                         │    Express 5 API    │
                         └──────────┬──────────┘
                                    │
             ┌──────────────────────┼──────────────────────┐
             │                      │                      │
             ▼                      ▼                      ▼
      ┌─────────────┐       ┌──────────────┐      ┌──────────────┐
      │   MongoDB   │       │ Music / Media│      │  AI Services │
      │  Persistence│       │   Services   │      │  & Search    │
      └─────────────┘       └──────────────┘      └──────────────┘
```

------------------------------------------------------------------------

# 🚀 Quick Start

## 1. Clone the Repository

``` bash
git clone https://github.com/Tanishq3112/Vybe-Music.git
cd Vybe-Music
```

## 2. Install Dependencies

``` bash
npm install
```

If the project uses separate frontend/backend package files, install
dependencies in the corresponding directories as required.

## 3. Start Development

Use the project's development script:

``` bash
npm run dev
```

Then open the development URL displayed in your terminal.

------------------------------------------------------------------------

# ⚙️ Environment Variables

For local development, create the appropriate environment file required
by the project.

Typical configuration may include:

``` env
DATABASE_URL=your_mongodb_connection_string
```

Depending on the enabled services, additional variables may be required
for:

-   AI APIs
-   Email/OTP services
-   Music/media APIs
-   Authentication
-   Application secrets

**Never commit `.env` files containing real credentials.**

A safe pattern is:

``` text
.env
.env.local
.env.production
```

and a committed template such as:

``` text
.env.example
```

------------------------------------------------------------------------

# 🧪 Development Checklist

Before submitting changes:

``` bash
npm install
npm run dev
```

Verify:

-   [ ] Authentication works
-   [ ] OTP verification works
-   [ ] Music search works
-   [ ] Full-length playback works
-   [ ] Artist images load
-   [ ] AI Music Studio responds
-   [ ] Mobile navigation works
-   [ ] Background audio works on Android
-   [ ] No secrets are committed
-   [ ] Production build succeeds

------------------------------------------------------------------------

# 🔒 Security

Please follow these practices when contributing:

-   Never commit API keys.
-   Never commit database passwords.
-   Never commit email credentials.
-   Never commit Android signing keys.
-   Keep production secrets in GitHub Secrets or a secure secret
    manager.
-   Validate authentication and OTP requests server-side.
-   Use HTTPS in production environments.

------------------------------------------------------------------------

# 🤝 Contributing

Contributions are welcome.

A simple contribution workflow:

``` bash
git checkout -b feature/my-feature
git add .
git commit -m "Add: my feature"
git push origin feature/my-feature
```

Then open a Pull Request on GitHub.

------------------------------------------------------------------------

# 📄 License

Add the project's chosen license here before public distribution.

If this project is intended to remain proprietary, replace this section
with the appropriate proprietary-use statement.

------------------------------------------------------------------------

# 🎵 VYBE

**Stream. Discover. Vibe.**

Built as a modern AI-powered music streaming experience across web and
Android.
