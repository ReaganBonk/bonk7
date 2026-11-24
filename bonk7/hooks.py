app_name = "bonk7"
app_title = "Bonk7"
app_publisher = "Bonk & Co Ltd"
app_description = "Bonk & Co branding and Cin7-style layout for ERPNext"
app_email = "reagan@bonkandco.com"
app_license = "mit"

required_apps = ["frappe/erpnext"]

# Logo used by the desk navbar / app switcher, and the browser tab icon
app_logo_url = "/assets/bonk7/images/bonk7-icon.svg"

website_context = {
    "favicon": "/assets/bonk7/images/bonk7-icon.svg",
    "splash_image": "/assets/bonk7/images/bonk7-logo.svg",
}

# Loaded on every desk page
app_include_css = "/assets/bonk7/css/bonk7.css"
app_include_js = "/assets/bonk7/js/bonk7.js"

# Login and website pages
web_include_css = "/assets/bonk7/css/bonk7-web.css"

add_to_apps_screen = [
    {
        "name": "bonk7",
        "logo": "/assets/bonk7/images/bonk7-icon.svg",
        "title": "Bonk7",
        "route": "/app/selling",
    }
]
