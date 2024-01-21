function data() {
  return {
    "general": [
      {
        "parent_name": "Dashboard",
        "image":"fas fa-chart-line",
        "is_child": false
      },
      {
        "parent_name": "Recharge",
        "image":"fas fa-battery-half",
        "is_child": true,
        "child": [
          {
            "child_name": "Auto",
            "load": "recharge.html"
          },
          {
            "child_name": "Mobile",
            "load": "recharge.html"
          },
          {
            "child_name": "Games",
            "load": "recharge.html"
          },
          {
            "child_name": "Voucher",
            "load": "recharge.html"
          }
        ]
      },
      {
        "parent_name": "Bill Payment",
        "image":"far fa-money-bill-alt",
        "is_child": true,
        "child": [
          {
            "child_name": "All in One BBPS",
            "load": "recharge.html"
          },
          {
            "child_name": "Credit Card Payments",
            "load": "recharge.html"
          },
          {
            "child_name": "Mobile",
            "load": "recharge.html"
          },
          {
            "child_name": "Broadband",
            "load": "recharge.html"
          }
        ]
      }
    ]
  }
}


function loadSideNavigation() {
  let sideNav = data();
  let html = '';

  let general = sideNav.general;
  general.forEach(parent => {
    if (parent.is_child == false) {
      html += `<li>
                    <a href="#">
                      <i class="`+parent.image+`"></i>
                        <span>`+ parent.parent_name + `</span>
                    </a>
                  </li>`;
    } else {
      let children = parent.child;
      html += `<li class="sidebar-dropdown">
                  <a href="#">
                  <i class="`+parent.image+`"></i>
                    <span>`+ parent.parent_name + `</span>                    
                  </a>
                  <div class="sidebar-submenu">
                    <ul>
                    `;
      children.forEach(child => {
        html += `<li>
            <a href="#" onclick="loadContent('recharge.html')">`+ child.child_name + `</a>
          </li>`;
      })

      html += `</ul>
                  </div>
                </li>`;
    }

  })

  return html;


}