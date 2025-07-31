const signature = document.querySelector(".signature");
signature.style.opacity = 0;

const message = `I don’t even know if you’ll ever read this.\nBut if you do… I just want you to know, I still think about you sometimes.\n\nWe both tried. We both cared. But the universe just never gave us enough space to become “us.”\n\nI just wonder… if we had met at a different point in life, would the ending have been different?\n\nAnyway, I hope you're doing okay, even though we’re not in each other’s lives anymore.\ni miss you, us, myself when us together..\n\ni hope you happy because your happpiness also my happiness.\ni wish you and i can together in another universe.. or in another time once again.\n\nI LOVE YOU AYUDYA SAFITRI\n\n~ BAGAS NURDIANSYAH`;

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
        if (message.charAt(i) === '\n') {
          typedText.innerHTML += '<br>';
        } else {
          typedText.innerHTML += message.charAt(i);
        }
        i++;
        setTimeout(typeWriter, 60);
      } else {
        setTimeout(() => {
          signature.style.opacity = 1;
        }, 1000);
      }
    }

    typeWriter();
  }, 1200);
}
