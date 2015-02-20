function viewPage() {
  if (window == parent) return;
  else parent.viewPage();
}