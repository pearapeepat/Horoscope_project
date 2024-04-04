<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Random Horoscope</title>
    <link rel="stylesheet" href="style.css">

</head>


<body>
    <div class="loader" id="loader" style="justify-content: center;display: flex; z-index: 9999; background-color: rgba(0, 0, 0, 0.5);">
        <div class="circle-1"></div>
        <div class="circle-2"></div>
        <div class="circle-3"></div>
        <div class="circle-4"></div>
        <div class="circle-5"></div>

        <div class="square-1"></div>
        <div class="square-2"></div>
        <div class="square-3"></div>
        <div class="square-4"></div>
    </div>
    <audio id="clickSound">
        <source src="magic-sound.mp3" type="audio/mpeg">
        <!-- Add fallback sources for other browsers if needed -->
        Your browser does not support the audio element.
    </audio>
    <p class="title">ดูดวงไพ่ยิปซี</p>
    <p class="description">ดูดวงไพ่ยิปซีรายวัน ทำนายภาพรวมความรัก การงาน การเงินของคุณในวันนี้ คุณสามารถดูดวงไพ่ยิปซีรายวันง่ายๆ เพียงตั้งจิตอธิษฐานในสิ่งที่ต้องการ ตั้งคำถามที่อยากรู้ แล้วเลือกไพ่ขึ้นมา 1 ใบ คำตอบจะปรากฎผ่านคำทำนายจากไพ่ยิปซีที่คุณเลือก</p>
    <div class="container">
        <section class="jsx-4063660803">

            <div class="jsx-4063660803 clearfix Tarot">
                <div class="jsx-4063660803 StackCards">

                </div>
            </div>
        </section>
    </div>
    <div id="modal-container" class="one">
        <div class="modal-background">
            <i class="bi bi-x-lg fw-bold" id="close"></i>
            <div id="container">
                <div class="container">
                    
                    <div class="row" id="horoscope">

                    </div>

                </div> <!-- container -->
            </div>
        </div>
    </div>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="script.js"></script>
</body>

</html>