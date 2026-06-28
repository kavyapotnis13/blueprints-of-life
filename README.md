# Blueprints of Life

The static site for the *Blueprints of Life* podcast. No frameworks, no build step. Hosted on GitHub Pages.

## Structure

```
index.html          home page — hero + list of figures (posts)
about.html          about page
css/style.css       shared stylesheet
posts/              one HTML file per article
  hello-world.html  sample post with Spotify episode embed
```

## Adding a new post

1. Copy `posts/hello-world.html` to `posts/your-slug.html`.
2. Update the `<title>`, the `Fig. NN` label, the `<h1>`, the body, and the Spotify embed ID.
3. Add a new `<li>` to the post list in `index.html` (newest on top).

**Figure numbering convention:** Figures are sequential by episode, in chronological order. Episode 01 is `Fig. 01`, episode 02 is `Fig. 02`, etc. The hero is `Fig. 00 — Abstract`. The audio embed inside an episode post is `Fig. NNa` (e.g. `Fig. 01a`). When you add a new post, give it the next figure number — the home page will display newest-first, so the figure numbers count *down* as you scroll.

## Embedding a Spotify episode

On the Spotify episode page: **Share → Embed episode → Copy**. Paste the iframe into the `<figure class="embed">` block (or replace `REPLACE_WITH_EPISODE_ID` in the sample).

## Local preview

```
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Deploying to GitHub Pages

Push to `main`, then in the repo **Settings → Pages**, set source to `main` / root. Site goes live at `https://<username>.github.io/kavya-blog/`.
