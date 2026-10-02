name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  deploy:
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Build static page
        run: |
          mkdir -p dist
          cat > dist/index.html <<'EOF'
          <!DOCTYPE html>
          <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>BAT Vidyagram</title>
            <meta name="description" content="BAT Vidyagram — full-screen embedded app." />
            <style>
              html, body { margin: 0; padding: 0; height: 100%; overflow: hidden; }
              iframe { position: fixed; inset: 0; width: 100%; height: 100%; border: 0; }
            </style>
          </head>
          <body>
            <iframe
              src="https://bat.unuverse.workers.dev/"
              title="BAT Vidyagram"
              allow="accelerometer; autoplay; clipboard-read; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
              allowfullscreen
            ></iframe>
          </body>
          </html>
          EOF
          touch dist/.nojekyll

      - name: Setup Pages
        uses: actions/configure-pages@v5

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: dist

      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
