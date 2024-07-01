let social_share = document.getElementById("gmail_share");
let git_page = document.getElementById("git_hub");
function gmailShare(url) {
  window.open(
    (url =
      "https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=marnusvw7@gmail.com&body=my-text"),
    "_blank",
    "sharer",
    "toolbar=0,status=0,width=648,height=395"
  );
  return true;
}
function githubShare(url) {
  window.open(
    (url = "https://github.com/marnusvw"),
    "_blank",
    "sharer",
    "toolbar=0,status=0,width=648,height=395"
  );
  return true;
}

social_share.addEventListener("click", gmailShare);
git_page.addEventListener("click", githubShare);
