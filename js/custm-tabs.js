function showTab(tabId) {
    // Hide all tabs
    var tabs = document.querySelectorAll('.tabs-content');
    tabs.forEach(function (tab) {
        tab.classList.remove('active');
    });

    // Show the selected tab
    document.getElementById(tabId).classList.add('active');

    // Remove active class from all tabs
    var tabButtons = document.querySelectorAll('.tabs-child');
    tabButtons.forEach(function (button) {
        button.classList.remove('active');
    });

    // Add active class to the clicked tab
    event.target.classList.add('active');
}