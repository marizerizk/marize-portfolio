# Marize Rizk — Creative Portfolio

A one-page portfolio website built with plain HTML, CSS and JavaScript. There is no build step: upload the files and the site works.

## Publish on GitHub Pages (about 5 minutes)

1. Sign in at github.com, click **+** (top right), then **New repository**.
   - Name it, for example `marize-portfolio`
   - Set it to **Public**, then click **Create repository**
2. On the new repository page, click **uploading an existing file**.
3. Unzip the download, open the `marize-portfolio` folder, select **everything inside it** (`index.html`, `assets`, `README.md`, `.nojekyll`) and drag it into the upload area.
   Keep the `assets` folder structure as it is. The largest file is about 6 MB, so the browser upload handles it.
4. Click **Commit changes**.
5. Go to **Settings → Pages**. Under *Build and deployment*, choose **Deploy from a branch**, set the branch to **main** and the folder to **/ (root)**, then click **Save**.
6. After a minute or two the page shows your link:
   `https://<your-username>.github.io/marize-portfolio/`

## Editing

| What | Where |
|---|---|
| Text in any section | `index.html` |
| Services, industries, capability map, video list | the `DATA` block at the top of `assets/js/main.js` |
| Colours and fonts | the `:root` block at the top of `assets/css/style.css` |
| Videos and their cover images | `assets/video/work-01.mp4` … `work-12.mp4` (+ `.webp` covers) |
| Downloadable PDF | `assets/Marize-Rizk-Portfolio.pdf` |
| WhatsApp number | search `201065090040` in `index.html` |

To add a video, put `work-13.mp4` and `work-13.webp` in `assets/video/` and add a line to the `WORK` list in `main.js`.

## Credits

- Graphics (torn paper, folder, tape, pins) come from Marize's original Canva design.
- Fonts: Aileron (public domain) and Libre Caslon Text (SIL Open Font License), both self-hosted in `assets/fonts/`.
