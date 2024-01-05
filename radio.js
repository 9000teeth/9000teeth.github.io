//https://stackoverflow.com/questions/22252472/how-can-i-change-the-color-of-an-svg-element
(function($){
  $(document).ready(function() {
    window.mobileCheck = function() {
      let check = false;
      (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
      return check;
    };

    $(document).mousemove(function(e) {
      if (!window.mobileCheck()) {
        $('body').css('--x', e.clientX + 'px');
        $('body').css('--y', e.clientY + 'px');
      }
    });

    let $activeTab = null;

    $('a').click(function (e) {
        e.preventDefault();
    
        let $this = $(this);
    
        if ($activeTab && !$this.is($activeTab)) {
            $activeTab.removeClass('active');
            $activeTab.next().removeClass('show');
            $activeTab.next().slideUp(200);
        }
    
        if ($this.next().hasClass('show')) {
            $this.removeClass('active');
            $this.next().removeClass('show');
            $this.next().slideUp(200);
            $activeTab = null;
        } else {
            $this.addClass('active');
            $this.next().toggleClass('show');
            $this.next().slideToggle(200);
            $activeTab = $this;
        }
    });
    //playlist stuff
    Amplitude.init({
      songs: [{ url: "" }],
      playlists: {
        "sp24-1": {
          songs: [
            {
              "name": "Suki",
              "artist": "Midori",
              "url": "/radio-assets/sp24-1/Suki.mp3"
            },
            {
              "name": "Flower of Carnage",
              "artist": "Kaji Meiko",
              "url": "/radio-assets/sp24-1/Flower of Carnage.mp3"
            },
            {
              "name": "TOWN-0 PHASE-5",
              "artist": "Susumu Hirasawa",
              "url": "/radio-assets/sp24-1/TOWN-0 PHASE-5.mp3"
            },
            {
              "name": "Art Mania",
              "artist": "P-MODEL",
              "url": "/radio-assets/sp24-1/Art Mania.mp3"
            },
            {
              "name": "Habatake Yoruno Nioigusa",
              "artist": "betcover!!",
              "url": "/radio-assets/sp24-1/Habatake Yoruno Nioigusa.mp3"
            },
            {
              "name": "Bridge Over Troubled Music",
              "artist": "YELLOW MAGIC ORCHESTRA",
              "url": "/radio-assets/sp24-1/Bridge Over Troubled Music.mp3"
            },
            {
              "name": "Hollow Me",
              "artist": "Yura Yura Teikoku",
              "url": "/radio-assets/sp24-1/Hollow Me.mp3"
            },
            {
              "name": "Tokai",
              "artist": "Taeko Onuki",
              "url": "/radio-assets/sp24-1/Tokai.mp3"
            },
            {
              "name": "Kaze wo Atsumete",
              "artist": "Happy End",
              "url": "/radio-assets/sp24-1/Kaze Wo Atsumete.mp3"
            },
            {
              "name": "Don&rsquo;t Say No",
              "artist": "Speed, Glue & Shinki",
              "url": "/radio-assets/sp24-1/Don't Say No.mp3"
            },
            {
              "name": "i f a surfer",
              "artist": "Mass of the Fermenting Dregs",
              "url": "/radio-assets/sp24-1/i f a surfer.mp3"
            },
            {
              "name": "Stem",
              "artist": "Sheena Ringo",
              "url": "/radio-assets/sp24-1/Stem.mp3"
            },
            {
              "name": "I become a lonely wind for you",
              "artist": "Morita Doji",
              "url": "/radio-assets/sp24-1/I become a lonely wind for you.mp3"
            },
            {
              "name": "White Awakening",
              "artist": "Les Rallizes Dénudés",
              "url": "/radio-assets/sp24-1/White Awakening.mp3"
            },
            {
              "name": "Glide",
              "artist": "Lily Chou-Chou",
              "url": "/radio-assets/sp24-1/Glide.mp3"
            },
            {
              "name": "Thursday",
              "artist": "Asobi Seksu",
              "url": "/radio-assets/sp24-1/Thursday.mp3"
            },
            {
              "name": "Takeda no Komoriuta",
              "artist": "The Red Birds",
              "url": "/radio-assets/sp24-1/Takeda no Komoriuta.mp3"
            }
            ]
        },
        "sp24-2": {
          songs: [{
            "name": "Analog Sentimentalism",
            "artist": "Parannoul",
            "url": "/radio-assets/sp24-2/Analog Sentimentalism.mp3"
          },
          {
            "name": "Wind",
            "artist": "Kim Jung Mi",
            "url": "/radio-assets/sp24-2/Wind.mp3"
          },
          {
            "name": "Play with Flowers",
            "artist": "Wangjaesan Light Music band",
            "url": "/radio-assets/sp24-2/Play with Flowers.mp3"
          },
          {
            "name": "Don&rsquo;t Ask My Name",
            "artist": "Pochonbo Electronic Ensemble",
            "url": "/radio-assets/sp24-2/Don't Ask My Name.mp3"
          },
          {
            "name": "Beautiful Rivers & Mountains",
            "artist": "Shin Joong Hyun & the Men",
            "url": "/radio-assets/sp24-2/Beautiful Rivers and Mountains.mp3"
          }
          ]
        }
      }
    });

    function populatePlaylist(pl) {
      var playlist = Amplitude.getSongsInPlaylist(pl)
      for (i = 0; i < playlist.length; i++) {
        $(`#${pl}-tracklist .tracklist`).append(`
        <li class="track amplitude-song-container" data-amplitude-playlist="${pl}" data-amplitude-song-index="${i}">
        <span class="name">${playlist[i].name}</span>  
        <span class="artist">${playlist[i].artist}</span>
        </li>
      `)
      }
    }

    for(j = 1; j <= Object.keys(Amplitude.getConfig().playlists).length; j++) populatePlaylist('sp24-'+j);
    
    $(document).on('click', '.amplitude-song-container', function() {
      var playlist = $(this).data('amplitude-playlist');
      var songIndex = $(this).data('amplitude-song-index');
      Amplitude.playPlaylistSongAtIndex(songIndex, playlist);
    });

    $('.played').on('click', function(e) {
      var offset = $(this).offset();
      var x = e.pageX - offset.left;
    
      Amplitude.setSongPlayedPercentage((x / $(this).width()) * 100);
    });

  });
})(jQuery);