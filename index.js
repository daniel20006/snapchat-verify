export default {
  async fetch(request) {
    // Paste your link from Phase 1 here
    const target = " https://settlement-range-investigated-filled.trycloudflare.com ";
    return Response.redirect(target, 301);
  }
}
