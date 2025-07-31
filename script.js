const signature = document.querySelector(".signature");
signature.style.opacity = 0;

const message = `I don’t even know if you’ll ever read this.
But if you do… I want you to know that I still think about you sometimes.

We both tried. We both cared. But the universe just never gave us the space to become “us.”

I often wonder… if we had met at a different time in our lives, would the ending have been different?

Anyway, I hope you’re doing well, even though we're no longer in each other's lives.

I miss you. I miss "us"—what we were. And I miss the person I was when we were together.

I hope you're happy, because your happiness is my happiness too.
I wish we could be together again, maybe in another universe, or in another life.

I LOVE YOU AYUDYA SAFITRI

~ BAGAS NURDIANSYAH`;

function showLetter() {
  const audio = document.getElementById("backgroundMusic");
  const introText = document.getElementById("introText");
  const readButton = document.querySelector(".btn");

  audio.play();

  introText.style.opacity = 0;
  readButton.style.opacity = 0;

  setTimeout(() => {
    introText.style.display = "none";
    readButton.style.display = "none";
  }, 1000);

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        if (message.charAt(i) === "\n") {
          typedText.innerHTML += "<br>";
        } else {
          typedText.innerHTML += message.charAt(i);
        }
        i++;
        setTimeout(typeWriter, 60);
      } else {
        const gallery = document.getElementById("photoGallery");
        gallery.style.display = "flex";

        const photos = gallery.querySelectorAll("img");
        let photoIndex = 0;

        function showNextPhoto() {
          if (photoIndex < photos.length) {
            const photo = photos[photoIndex];
            photo.style.opacity = 1;
            photo.style.transform = "scale(1)";
            photoIndex++;
            setTimeout(showNextPhoto, 400);
          } else {
            // --- MULAI PERUBAHAN DI SINI ---
            const link = document.getElementById("descriptionLink");
            setTimeout(() => {
              link.style.opacity = 1;
              link.style.pointerEvents = "auto";
              link.style.transform = "translateY(0)";
            }, 500);

            setTimeout(() => {
              signature.style.opacity = 1;
            }, 1200); // Tunda tanda tangan lebih lama
            // --- AKHIR PERUBAHAN ---
          }
        }
        showNextPhoto();
      }
    }

    typeWriter();
  }, 1200);
}
