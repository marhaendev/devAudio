# devAudio Documentation

## 1. HTML Markup
**[ENG]** Add the `<audio>` element with the "dev-audio" class to your HTML document.\
**[ID]** Tambahkan elemen `<audio>` dengan kelas "dev-audio" di dalam dokumen HTML Anda.
```html
<audio class="dev-audio"></audio>
```

## 2. JavaScript Initialization
**[ENG]** Use the following script to initialize devaudio.\
**[ID]** Gunakan script berikut untuk menginisialisasi devaudio.
```javascript
<script src="https://cdn.jsdelivr.net/gh/marhaendev/devAudio@main/script.js"></script>
```
**[ENG]** Make sure to include this script `devAudio` in tag `<script>`. Use options as needed \
**[ID]** Pastikan Anda memasukkan script `devAudio` dalam tag `<script>`. Gunakan sesuai kebutuhan
```javascript
<script>
    devAudio({
        loop: false,                  // Enable or disable song looping (Aktifkan atau nonaktifkan pengulangan lagu)
        controls: true,               // Show or hide the built-in audio controls (Tampilkan atau sembunyikan kontrol audio bawaan)
        playlist: ['music1.mp3', 'music2.mp3'],  // List of songs to be played (Daftar lagu yang akan diputar)
        mute: false,                  // Turn the sound on or off (Matikan atau hidupkan suara)
        onEnd: function() {
            // Callback when the playlist finishes playing (Callback saat playlist selesai diputar)
        },
        delayTime: 2000,               // Delay time before the first playback (in milliseconds) (Waktu penundaan sebelum pemutaran pertama)
        autoplay: true                 // Enable autoplay (Aktifkan pemutaran otomatis)
    });
</script>
```

## 3. DevAudio Options
### [ENGLISH]

- **loop**
  - **Data Type**: Boolean
  - **Feature**: Enable or disable song looping.
  - **Options**: true, false
  - **Default**: false

- **controls**
  - **Data Type**: Boolean
  - **Feature**: Show or hide the built-in audio controls.
  - **Options**: true, false
  - **Default**: true

- **playlist**
  - **Data Type**: Array
  - **Feature**: List of URLs of songs to be played.

- **mute**
  - **Data Type**: Boolean
  - **Feature**: Turn the sound on or off.
  - **Options**: true, false
  - **Default**: false

- **onEnd**
  - **Data Type**: Function
  - **Feature**: Function callback when the playlist finishes playing.

- **delayTime**
  - **Data Type**: Number
  - **Feature**: Delay time before the first playback (in milliseconds).
  - **Default**: 0

- **autoplay**
  - **Data Type**: Boolean
  - **Feature**: Enable or disable autoplay.
  - **Options**: true, false
  - **Default**: false
 

### [BAHASA INDONESIA]

- **loop**
  - **Tipe Data**: Boolean
  - **Fitur**: Aktifkan atau nonaktifkan pengulangan lagu.
  - **Opsi**: true, false
  - **Default**: false

- **controls**
  - **Tipe Data**: Boolean
  - **Fitur**: Tampilkan atau sembunyikan kontrol audio bawaan.
  - **Opsi**: true, false
  - **Default**: true

- **playlist**
  - **Tipe Data**: Array
  - **Fitur**: Daftar URL lagu yang akan diputar.

- **mute**
  - **Tipe Data**: Boolean
  - **Fitur**: Matikan atau hidupkan suara.
  - **Opsi**: true, false
  - **Default**: false

- **onEnd**
  - **Tipe Data**: Function
  - **Fitur**: Fungsi callback saat playlist selesai diputar.

- **delayTime**
  - **Tipe Data**: Number
  - **Fitur**: Waktu penundaan sebelum pemutaran pertama (dalam milidetik).
  - **Default**: 0

- **autoplay**
  - **Tipe Data**: Boolean
  - **Fitur**: Aktifkan atau nonaktifkan pemutaran otomatis.
  - **Opsi**: true, false
  - **Default**: false

## Example
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Autoplay Music</title>
</head>
<body>

<audio class="dev-audio"></audio>

<script>
<script src="https://cdn.jsdelivr.net/gh/marhaendev/devAudio@main/script.js"></script>
    devAudio({
autoplay:true,
        loop: false,
        controls: true,
        playlist: ['music1.mp3', 'music2.mp3'],
        mute: false,
        onEnd: function() {
            // Callback when the playlist finishes playing
        },
        onRefresh: true, 
	delayTime: 2000
    });

</script>
</body>
</html>
```


