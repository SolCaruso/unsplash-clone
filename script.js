document.addEventListener("DOMContentLoaded", function() {

    const images = [
        {
            thumb: './images/thumb/kellie-wirmel.jpg',
            hd: './images/hd/kellie-wirmel-hd.jpg',
            pfp: './images/pfp/kellie-wirmel.avif',
            profile: 'https://unsplash.com/@klutchy79',
            name: 'Kellie Wirmel',
            metadata: {
                camera: 'Nikon, EOS D7200',
                lens: '11.0mm f/5.6',
                exposure: '1/45s',
                iso: 100
            }
        },
        {
            thumb: './images/thumb/paul-vakalis-2.jpg',
            hd: './images/hd/paul-vakalis-2-hd.jpg',
            pfp: './images/pfp/paul-vakalis.avif',
            profile: 'https://unsplash.com/@paulvakalis',
            name: 'Paul Vakali',
            metadata: {
                camera: 'Canon, EOS 70D',
                lens: '18.0mm f/3.5',
                exposure: '1/40s',
                iso: 1000
            }
        },
        {
            thumb: './images/thumb/kevin-wang.jpg',
            hd: './images/hd/kevin-wang-hd.jpg',
            pfp: './images/pfp/kevin-wang.avif',
            profile: 'https://unsplash.com/@kevin_w_',
            name: 'Kevin Wang',
            metadata: {
                camera: 'Canon, EOS M5',
                lens: '11.0mm f/4.0',
                exposure: '1/10s',
                iso: 100
            }
        },
        {
            thumb: './images/thumb/michael-meigs.jpg',
            hd: './images/hd/michael-meigs-hd.jpg',
            pfp: './images/pfp/michael-meigs.avif',
            profile: 'https://unsplash.com/@michael_meigs',
            name: 'Michael Meigs',
            metadata: {
                camera: 'Canon, EOS REBEL T3',
                lens: '21.0mm f/3.5',
                exposure: '1/125s',
                iso: 3200
            }
        },
        {
            thumb: './images/thumb/paul-vakalis.jpg',
            hd: './images/hd/paul-vakalis-hd.jpg',
            pfp: './images/pfp/paul-vakalis.avif',
            profile: 'https://unsplash.com/@paulvakalis',
            name: 'Paul Vakali',
            metadata: {
                camera: 'Canon, EOS 70D',
                lens: '18.0mm f/3.5',
                exposure: '1/40s',
                iso: 640
            }
        },
            {
            thumb: './images/thumb/dana-katharina.jpg',
            hd: './images/hd/dana-katharina-hd.jpg',
            pfp: './images/pfp/dana-katharina.avif',
            profile: 'https://unsplash.com/@danakatharina',
            name: 'Dana Katharina',
            metadata: {
                camera: 'Canon, EOS M50m2',
                lens: '18.0mm f/3.5',
                exposure: '1/80s',
                iso: 250
            }
        },
        {
            thumb: './images/thumb/p-mantha.jpg',
            hd: './images/hd/p-mantha-hd.jpg',
            pfp: './images/pfp/p-mantha.avif',
            profile: 'https://unsplash.com/@pmantha',
            name: 'P Mantha',
            metadata: {
                camera: 'Nikon, EOS D7000',
                lens: '18.0mm f/3.5',
                exposure: '1/40s',
                iso: 400
            }
        },
        {
            thumb: './images/thumb/pete-alexopoulos.jpg',
            hd: './images/hd/pete-alexopoulos-hd.jpg',
            pfp: './images/pfp/pete-alexopoulos.avif',
            profile: 'https://unsplash.com/@pete_a',
            name: 'Pete Alexopoulos',
            metadata: {
                camera: 'Nikon, D600',
                lens: '22.0mm f/18',
                exposure: '1/5s',
                iso: 280
            }
        },
        {
            thumb: './images/thumb/ronan-dorard.jpg',
            hd: './images/hd/ronan-dorard-hd.jpg',
            pfp: './images/pfp/ronan-dorard.avif',
            profile: 'https://unsplash.com/@ronan_el_dl',
            name: 'Ronan Dorard',
            metadata: {
                camera: 'Apple, iPhone 12',
                lens: '1.6mm f/2.4',
                exposure: '1/99s',
                iso: 40
            }
        },
        {
            thumb: './images/thumb/michaela-hampi.jpg',
            hd: './images/hd/michaela-hampi-hd.jpg',
            pfp: './images/pfp/michaela-hampi.avif',
            profile: 'https://unsplash.com/@michael_meigs',
            name: 'Michaela Hampi',
            metadata: {
                camera: 'Samsung, NX mini',
                lens: '9.0mm f/3.5',
                exposure: '1/200s',
                iso: 800
            }
        },
        {
            thumb: './images/thumb/nick-kelly.jpg',
            hd: './images/hd/nick-kelly-hd.jpg',
            pfp: './images/pfp/nick-kelly.avif',
            profile: 'https://unsplash.com/@nkdsn',
            name: 'Nick Kelly',
            metadata: {
                camera: 'Apple, iPhone 13 Pro',
                lens: '5.7mm f/1.5',
                exposure: '1/30s',
                iso: 800
            }
        },
        {
            thumb: './images/thumb/tyler-franta.jpg',
            hd: './images/hd/tyler-franta-hd.jpg',
            pfp: './images/pfp/tyler-franta.avif',
            profile: 'https://unsplash.com/@tfrants',
            name: 'Tyler Franta',
            metadata: {
                camera: 'Apple, iPhone 8 Plus',
                lens: '4.0mm f/1.8',
                exposure: '1/120s',
                iso: 25
            }
        },
        
    ];

    const $gallery = document.getElementById("gallery");
    const modal = document.getElementById("modal");
    const modalImage = document.getElementById("modalImage");
    const modalCaption = document.getElementById("modalCaption");
    const modalProfileLink = document.getElementById("modalProfileLink");
    const modalPfp = document.getElementById("modalPfp");
    const modalCamera = document.getElementById("modalCamera");
    const modalLens = document.getElementById("modalLens");
    const modalExposure = document.getElementById("modalExposure");
    const modalISO = document.getElementById("modalISO");

    const fullSizeOverlay = document.querySelector('.full-size-overlay');
    const fullSizeImage = document.getElementById('fullSizeImage');
    let isFullSize = false;

    const $images = [];

    images.forEach((image, index) => {
        $images.push(`
            <div class="gallery-item" data-index="${index}">
                <img src="${image.thumb}" alt="${image.name}" class="gallery-image">
                <div class="overlay">
                    <div class="profile-info">
                        <img src="${image.pfp}" alt="Profile picture" class="profile-pfp">
                        <span class="profile-name" data-profile="${image.profile}" data-index="${index}">${image.name}</span>
                    </div>
                    <a href="${image.hd}" class="download-button" data-hd="${image.hd}" data-index="${index}">
                        <svg width="24" height="24" viewBox="0 0 24 24" version="1.1" aria-hidden="false">
                            <desc lang="en-US">Arrow pointing down</desc>
                            <path d="m19.35 11.625-5.85 5.4V1.5h-3v15.525l-5.85-5.4-2.025 2.25L12 22.425l9.375-8.55-2.025-2.25Z"></path>
                        </svg>
                    </a>
                </div>
            </div>
        `);
    });

    $gallery.innerHTML = $images.join('');

    $gallery.addEventListener('click', (event) => {
        const galleryItem = event.target.closest('.gallery-item');
        const profileName = event.target.closest('.profile-name');
        const downloadButton = event.target.closest('.download-button');

        if (profileName) {
            const profileLink = profileName.getAttribute('data-profile');
            window.open(profileLink, '_blank');
            return;
        }

        if (downloadButton) {
            event.preventDefault();
            const hdImageUrl = downloadButton.getAttribute('data-hd');
            const a = document.createElement('a');
            a.href = hdImageUrl;
            a.download = '';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            return;
        }

        if (galleryItem && !downloadButton && !profileName) {
            const index = galleryItem.getAttribute('data-index');
            const clickedImage = images[index];

            modalImage.src = clickedImage.hd;
            modalCaption.textContent = clickedImage.name;
            modalProfileLink.href = clickedImage.profile;
            modalPfp.src = clickedImage.pfp;
            modalCamera.textContent = clickedImage.metadata.camera;
            modalLens.textContent = clickedImage.metadata.lens;
            modalExposure.textContent = clickedImage.metadata.exposure;
            modalISO.textContent = clickedImage.metadata.iso;

            modal.style.display = 'flex';
        }
    });

    // Toggle full-size view on modal image click
    modalImage.addEventListener('click', (event) => {
        event.stopPropagation();
        if (!isFullSize) {
            fullSizeImage.src = modalImage.src;
            fullSizeImage.style.display = 'block';
            fullSizeOverlay.style.display = 'block';
            isFullSize = true;
        }
    });

    // Close full-size view on overlay or full-size image click
    const closeFullSizeView = () => {
        fullSizeOverlay.style.display = 'none';
        fullSizeImage.style.display = 'none';
        isFullSize = false;
    };

    fullSizeOverlay.addEventListener('click', closeFullSizeView);
    fullSizeImage.addEventListener('click', closeFullSizeView);

    // Close modal when clicking outside modal content, image, or modal-name-link
    modal.addEventListener('click', (event) => {
        const clickedInsideImage = event.target === modalImage;
        const clickedInsideNameLink = event.target.closest('#modalProfileLink');
        
        if (isFullSize) {
            closeFullSizeView(); // Return to modal view if in full-size mode
        } else if (!clickedInsideImage && !clickedInsideNameLink) {
            modal.style.display = 'none'; // Close modal if clicking outside image or modal-name-link
        }
    });
});