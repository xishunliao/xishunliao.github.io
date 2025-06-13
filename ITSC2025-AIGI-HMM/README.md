# ITSC2025 Workshop Website

This is the official website for the workshop "Integrating Artificial Intelligence and Geospatial Intelligence Innovative Methods and Applications in Human Mobility Modeling" at IEEE ITSC 2025.

## Features

- Responsive design for all devices
- Accessible navigation
- SEO optimized
- Easy to maintain and update
- Speaker profiles with photos
- Workshop schedule
- Call for papers
- Important dates
- Contact information

## Technology Stack

- Jekyll (Static Site Generator)
- HTML5
- CSS3
- JavaScript
- Font Awesome (Icons)
- Google Fonts

## Setup Instructions

1. Install Ruby and Jekyll:
   ```bash
   # Install Ruby (if not already installed)
   # Windows: Download from https://rubyinstaller.org/
   # macOS: brew install ruby
   # Linux: sudo apt-get install ruby-full

   # Install Jekyll and Bundler
   gem install jekyll bundler
   ```

2. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/ITSC2025-AIGI-HMM.git
   cd ITSC2025-AIGI-HMM
   ```

3. Install dependencies:
   ```bash
   bundle install
   ```

4. Run the development server:
   ```bash
   bundle exec jekyll serve
   ```

5. Visit `http://localhost:4000` in your browser

## Directory Structure

```
/
├── _config.yml          # Jekyll configuration
├── _layouts/           # HTML templates
├── _includes/          # Reusable components
├── assets/            # Static assets
│   ├── css/          # Stylesheets
│   ├── js/           # JavaScript files
│   └── images/       # Images
├── _speakers/         # Speaker profiles
└── index.html         # Homepage
```

## Adding Content

### Adding a New Speaker

1. Create a new file in `_speakers/` directory:
   ```yaml
   ---
   name: Speaker Name
   title: Title
   institution: Institution Name
   image: speaker-image.jpg
   bio: Speaker biography...
   ---
   ```

2. Add the speaker's image to `assets/images/`

### Updating Workshop Information

1. Edit the relevant section in `index.html`
2. Update dates and deadlines in the CFP section
3. Modify the schedule in the schedule section

### Adding New Pages

1. Create a new `.html` or `.md` file in the root directory
2. Add the following front matter:
   ```yaml
   ---
   layout: default
   title: Page Title
   ---
   ```

## Maintenance

### Regular Updates

1. Check for outdated dependencies:
   ```bash
   bundle update
   ```

2. Update speaker information
3. Review and update important dates
4. Check for broken links
5. Verify mobile responsiveness

### SEO Maintenance

1. Update meta descriptions
2. Check page titles
3. Verify image alt text
4. Monitor Google Search Console

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For any questions or concerns, please contact the workshop organizers at [contact@example.com](mailto:contact@example.com) 