export default {
  async fetch(request) {
    // Paste your link from Phase 1 here
    const target = "https://discussions-contributor-classic-forge.trycloudflare.com";
    return Response.redirect(target, 301);
  }
}
