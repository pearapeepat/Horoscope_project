$(document).ready(function () {
    // Show the loader
    // $('#loader').show();
    $('#loader').hide();
    $('#modal-container').hide();
    // setTimeout(function () {
    //     $('#loader').hide();
    // }, 3000); 

    $(".cards-container").empty();
    for (let i = 0; i < 10; i++) {
        const card = `
        <div class="jsx-1271772672 card" style="animation-delay: ${Math.random() * 6}s;padding: 2${i}px ${85 + i}px 0px 0px;">
          <div class="jsx-1271772672 cardImage"><img src="//s.isanook.com/sr/0/images/horo/tarot/cards/tarot-card.png" alt="back-card" class="jsx-1271772672"></div>
        </div>
      `;
        $(".StackCards").append(card);


    }
    // Append card to the container

    $('.card').click(function () {
        $('#loader').show();
        $('#modal-container').show();
        const clickSound = document.getElementById("clickSound");

        const textOptions = [
            `<div class="jsx-4186821122 jsx-1100691687"><div class="jsx-1910754571 thumbnail"><picture><source srcset="//s.isanook.com/ho/0/di/tarot/new/justice.png?ip/crop/w150h256/q80/webp, //s.isanook.com/ho/0/di/tarot/new/justice.png?ip/crop/w225h384/q80/webp 1.5x" type="image/webp"><img src="//s.isanook.com/ho/0/di/tarot/new/justice.png?ip/crop/w150h256/q80/png" fetchpriority="auto" alt="ไพ่หมายเลข 10 THE JUSTICE" width="150" height="256" srcset="//s.isanook.com/ho/0/di/tarot/new/justice.png?ip/crop/w225h384/q80/png 1.5x"></picture></div><h2 class="jsx-4186821122 jsx-1100691687 entryTitle">ไพ่หมายเลข 10 THE JUSTICE</h2><div id="EntryReader_0" class="jsx-4186821122 jsx-1100691687 EntryReaderInner"><p><strong>THE JUSTICE (XI)</strong></p>
            <p>เมื่อตาชั่ง สัญลักษณ์แห่งความยุติธรรม ปรากฏ นั่นหมายถึง เหตุการณ์ที่เกิดขึ้นในปัจจุบัน ในวันนี้ คือสิ่งที่เป็นผลมาจากการกระทำของผู้เปิดไพ่ในอดีต จากวันวาร</p>
            <p>สำหรับความรักที่มีปัญหา เป็นระยะที่จะทบทวนอย่างมีเหตุผล ไม่ใช้อารมณ์ เพราะถ้าแก้ไขไม่ได้ นี่คือเวลาที่จะยุติ จบ ด้วยการแยกทาง หย่าร้าง หรือ เป็นคดีความ และเป็นเวลาที่ควรพิจารณาจากความผิดพลาด หรือ ล้มเหลวที่เกิดขึ้น นำมากำหนดเส้นทางเดินใหม่ ที่จะหลีกเลี่ยง ไม่ให้เกิดปัญหาอย่างเดิมอีก</p>
            <p>สำหรับคนโสด พิจารณาให้ละเอียด มองผู้ที่มาปฏิสัมพันธ์อย่างรอบคอบ ด้วยเหตุผล ระงับ ข่ม อคติ ความลำเอียงที่เกิดจากหน้าตา ฐานะ กริยาวาจา ที่อาจทำให้หลงผิด จนผิดพลาด ได้</p>
            <p>&nbsp;</p></div></div> <button type="submit" onclick="window.location.reload()" class="btn-next">ทำนายต่อ</button>`,
            `<div class="jsx-4186821122 jsx-1100691687"><div class="jsx-1910754571 thumbnail"><picture><source srcset="//s.isanook.com/ho/0/di/tarot/new/swords-four.png?ip/crop/w150h256/q80/webp, //s.isanook.com/ho/0/di/tarot/new/swords-four.png?ip/crop/w225h384/q80/webp 1.5x" type="image/webp"><img src="//s.isanook.com/ho/0/di/tarot/new/swords-four.png?ip/crop/w150h256/q80/png" fetchpriority="auto" alt="ไพ่ 4 ดาบ (4 OF SWORDS)" width="150" height="256" srcset="//s.isanook.com/ho/0/di/tarot/new/swords-four.png?ip/crop/w225h384/q80/png 1.5x"></picture></div><h2 class="jsx-4186821122 jsx-1100691687 entryTitle">ไพ่ 4 ดาบ (4 OF SWORDS)</h2><div id="EntryReader_0" class="jsx-4186821122 jsx-1100691687 EntryReaderInner"><p><strong>ไพ่ 4 ดาบ (4 OF SWORDS)</strong></p>
            <p>หยุดพัก รักษาใจ .....เมื่อความรักเฉื่อยชา จืดชืด เมื่อไพ่ 4 ดาบปรากฏอยู่ตรงหน้า</p>
            <p>นั่นคือ เป็นระยะที่ควรปลีกตัว ..ออกห่างกัน แยกกันไปทำสิ่งที่ตัวเองชอบ เพื่อเติมพลังชีวิต ให้จิตใจแจ่มใส แล้วกลับมาหากัน ปรึกษากัน หาจุดพอดีที่จะอยู่ด้วยกันได้อย่างมีชีวิตชีวา และ มีความสุข</p>
            <p>สำหรับคนโสด เมื่อพบเจอไพ่ 4 ดาบ นั่นคือ ตราบใดที่ยังไม่พบคนที่ทำให้หัวใจคุณเต้นแรง หวั่นไหว วาบหวาม ก็ไม่ควรฝืนทนที่จะคบไปพลาง ๆ ก่อน</p>
            <p>เพราะจะทำให้ความมีชีวิตชีวา ความสดใสของคุณ ถูกสูบไปหมด จนเหี่ยวเฉา เหี่ยวแห้ง... รอคอย รอความรักที่แท้จริง ที่จะทำให้ตาเป็นประกาย หน้าตาสดใส ชื่นบาน จะดีกว่าไหม?</p>
            <p>&nbsp;</p></div></div> <button type="submit" onclick="window.location.reload()" class="btn-next">ทำนายต่อ</button>`,
            `<div class="jsx-4186821122 jsx-1100691687"><div class="jsx-1910754571 thumbnail"><picture><source srcset="//s.isanook.com/ho/0/di/tarot/new/pentacles-ace.png?ip/crop/w150h256/q80/webp, //s.isanook.com/ho/0/di/tarot/new/pentacles-ace.png?ip/crop/w225h384/q80/webp 1.5x" type="image/webp"><img src="//s.isanook.com/ho/0/di/tarot/new/pentacles-ace.png?ip/crop/w150h256/q80/png" fetchpriority="auto" alt="ไพ่ 1 เหรียญ (ACE OF PENTACLES)" width="150" height="256" srcset="//s.isanook.com/ho/0/di/tarot/new/pentacles-ace.png?ip/crop/w225h384/q80/png 1.5x"></picture></div><h2 class="jsx-4186821122 jsx-1100691687 entryTitle">ไพ่ 1 เหรียญ (ACE OF PENTACLES)</h2><div id="EntryReader_0" class="jsx-4186821122 jsx-1100691687 EntryReaderInner"><p>ไพ่ 1 เหรียญ (ACE OF PENTACLES)</p>
            <p>เมื่อไพ่ 1เหรียญปรากฏ บอกถึง...ความกล้าที่จะดึงพลังที่มี มาสร้างฝันที่เป็นจริง โดยเฉพาะที่ผู้ที่เกิดในราศีพฤษภ ราศีกันย์ และ ราศีมกร เมื่อเปิดได้ไพ่ใบนี้.... PENTACLES จะส่งผลให้มากที่สุด</p>
            <p>เป็นวันที่ดี ๆ สำหรับผู้เปิดได้ไพ่ 1 เหรียญ จะได้พบรัก พบเส้นทางรักใหม่ ที่จะพัฒนาความสัมพันธ์ให้ยาวนาน จากร่วมกันทำธุรกิจ หรือ แต่งงาน ครองคู่&nbsp;และสัมพันธ์รักของมีคนรัก คู่ครอง อยู่แล้ว</p>
            <p>ไพ่ 1 เหรียญ บอกถึงได้ของขวัญ ของสูงค่า มีราคาที่จะทำให้วาบหวาม หวั่นไหว กับ ผู้มอบให้ เขาหรือเธอคนนั้น</p>
            <p>แต่ให้ระวังสัมพันธ์กับ “คนอื่น” ที่ไม่ใช่คนรัก คุ่ครอง ตื่นเต้น ดีใจกับโอกาสที่ได้ หรือ รับของล้ำค่า อาจทำให้เผลอใจ ลืมตัว ...อาจก่อปัญหา ที่ต้องเลือกเส้นทางใหม่ที่ไม่ปรารถนาก็ได้</p>
            <p>&nbsp;</p></div></div> <button type="submit" onclick="window.location.reload()" class="btn-next">ทำนายต่อ</button>`,
            `<div class="jsx-1049262610 "><div class="jsx-4186821122 jsx-1100691687 EntryReader EntryReaderWrap clearfix size16"><div class="jsx-4186821122 jsx-1100691687"><div class="jsx-1910754571 thumbnail"><picture><source srcset="//s.isanook.com/ho/0/di/tarot/new/the-tower.png?ip/crop/w150h256/q80/webp, //s.isanook.com/ho/0/di/tarot/new/the-tower.png?ip/crop/w225h384/q80/webp 1.5x" type="image/webp"><img src="//s.isanook.com/ho/0/di/tarot/new/the-tower.png?ip/crop/w150h256/q80/png" fetchpriority="auto" alt="ไพ่หมายเลข 16 THE TOWER" width="150" height="256" srcset="//s.isanook.com/ho/0/di/tarot/new/the-tower.png?ip/crop/w225h384/q80/png 1.5x"></picture></div><h2 class="jsx-4186821122 jsx-1100691687 entryTitle">ไพ่หมายเลข 2 THE TOWER</h2><div id="EntryReader_0" class="jsx-4186821122 jsx-1100691687 EntryReaderInner"><p><strong>THE TOWER (XVI)</strong></p>
            <p>หอคอยที่กำลังพังทลาย บอกถึงโอกาสที่จะเปลี่ยนแปลง จบสิ้น เพื่อที่จะเริ่มต้นใหม่</p>
            <p>เมื่อ THE TOWER ปรากฏ สำหรับคนโสดที่แสนเหงา วันนี้ อาจพบเจอเหตุการณ์ที่จะทำให้ชีวิตของคุณเปลี่ยนแปลงอย่างไม่คาดฝัน ...กับใครบางคนที่พบเจอเป็นครั้งแรก ที่จะทำให้หัวใจคุณเต้นแรง เหมือนกระดอนออกจากอก ...เจอใครคนนั้นแล้ว เดินหน้าสานสัมพันธ์เลยนะคะ อย่าปล่อยให้โอกาสผ่านเลยไป</p>
            <p>แต่สำหรับสัมพันธ์รักที่ทรมาน ที่ยังหาทางออกไม่ได้ หรือยังไม่กล้าที่จะคิด...วันนี้อาจถึงจุดเปลี่ยนอย่างรุนแรงหรือกะทันหัน ที่ทำให้คุณตัดสินใจได้ ..จบสิ้นเพื่อเริ่มต้นใหม่ มีเส้นทางใหม่ หรือ จะอยู่อย่างแหลกสลาย</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p></div></div></div></div> <button type="submit" onclick="window.location.reload()" class="btn-next">ทำนายต่อ</button>`,
            `<div class="jsx-4186821122 jsx-1100691687"><div class="jsx-1910754571 thumbnail"><picture><source srcset="//s.isanook.com/ho/0/di/tarot/new/pentacles-six.png?ip/crop/w150h256/q80/webp, //s.isanook.com/ho/0/di/tarot/new/pentacles-six.png?ip/crop/w225h384/q80/webp 1.5x" type="image/webp"><img src="//s.isanook.com/ho/0/di/tarot/new/pentacles-six.png?ip/crop/w150h256/q80/png" fetchpriority="auto" alt="ไพ่ 6 เหรียญ (SIX OF PENTACLES)" width="150" height="256" srcset="//s.isanook.com/ho/0/di/tarot/new/pentacles-six.png?ip/crop/w225h384/q80/png 1.5x"></picture></div><h2 class="jsx-4186821122 jsx-1100691687 entryTitle">ไพ่ 6 เหรียญ (SIX OF PENTACLES)</h2><div id="EntryReader_0" class="jsx-4186821122 jsx-1100691687 EntryReaderInner"><p><strong>ไพ่ 6 เหรียญ (SIX OF PENTACLES)</strong></p>
            <p>เมื่อไพ่ 6 เหรียญ ปรากฏ บอกถึง การเป็นผู้ให้..แล้วจะทำให้ได้รับสิ่งดีๆ กลับคืนมา โดยเฉพาะที่ผู้ที่เกิดในราศีพฤษภ ราศีกันย์ และ ราศีมกร เมื่อเปิดได้ไพ่ใบนี้.... PENTACLES จะส่งผลให้มากที่สุด..</p>
            <p>ให้ความเมตตา อนุเคราะห์ กับญาติสนิท คนในครอบครัวของคนรัก/คู่ครอง การ..ให้...ของคุณในวันนี้ จะส่งผลดีให้กับคุณ ให้มีชีวิตรักที่มั่นคง และ มีความสุขในระยะยาว</p>
            <p>สำหรับคนโสด เมื่อไพ่ 6 เหรียญอยู่ตรงหน้า นั่นคือ เข้าร่วมกิจกรรมการกุศล หรือเข้าวัดทำบุญ ฟังธรรม มีโอกาสได้พบรัก เจอกัลยาณมิตร ที่จะนำพาคุณไปสู่ชีวิตที่งดงามยิ่งขึ้น</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p></div></div> <button type="submit" onclick="window.location.reload()" class="btn-next">ทำนายต่อ</button>`,
            `<div class="jsx-4186821122 jsx-1100691687"><div class="jsx-1910754571 thumbnail"><picture><source srcset="//s.isanook.com/ho/0/di/tarot/new/pentacles-five.png?ip/crop/w150h256/q80/webp, //s.isanook.com/ho/0/di/tarot/new/pentacles-five.png?ip/crop/w225h384/q80/webp 1.5x" type="image/webp"><img src="//s.isanook.com/ho/0/di/tarot/new/pentacles-five.png?ip/crop/w150h256/q80/png" fetchpriority="auto" alt="ไพ่ 5 เหรียญ (FIVE OF PENTACLES)" width="150" height="256" srcset="//s.isanook.com/ho/0/di/tarot/new/pentacles-five.png?ip/crop/w225h384/q80/png 1.5x"></picture></div><h2 class="jsx-4186821122 jsx-1100691687 entryTitle">ไพ่ 5 เหรียญ (FIVE OF PENTACLES)</h2><div id="EntryReader_0" class="jsx-4186821122 jsx-1100691687 EntryReaderInner"><p><strong>ไพ่ 5 เหรียญ (FIVE OF PENTACLES)</strong></p>
            <p>เมื่อไพ่ 5 เหรียญ ปรากฏ นั่นคือ จากร้าย...จะกลายเป็นดี โดยเฉพาะที่ผู้ที่เกิดในราศีพฤษภ ราศีกันย์ และ ราศีมกร เมื่อเปิดได้ไพ่ใบนี้.... PENTACLES จะส่งผลให้มากที่สุด..</p>
            <p>คนโสด เมือพบเจอไพ่ 5 เหรียญ บอกถึงชีวิตที่สุดเซ็ง สุดเหงา เปล่าเปลี่ยว กำลังจะเปลี่ยนไป ขอให้คุณลุกขึ้นมาอย่างกระฉับกระเฉง จากเปลี่ยนแปลงตัวเอง ทรงผม เสื้อผ้า ฯลฯ ให้ดูสดใส มีพลัง และ ร่าเริง แล้วสิ่งที่คุณรอคอย ความรัก เนื้อคู่ คนที่รู้ใจ ไม่ต้องวิ่งตาม ไขว่คว้า อยู่เฉยๆ ความรัก ความสุข จะลอยเข้ามาเอง</p>
            <p>แต่สำหรับความรักที่ทุกข์ทรมาน เมื่อไพ่ 5 เหรียญ มาทักทาย นั่นคือ อดทน อดใจรอ อีกไม่นาน ความเปลี่ยนแปลงกำลังจะเกิดขึ้น&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p></div></div> <button type="submit" onclick="window.location.reload()" class="btn-next">ทำนายต่อ</button>`,
            `<div class="jsx-4186821122 jsx-1100691687"><div class="jsx-1910754571 thumbnail"><picture><source srcset="//s.isanook.com/ho/0/di/tarot/new/queen-of-cups.png?ip/crop/w150h256/q80/webp, //s.isanook.com/ho/0/di/tarot/new/queen-of-cups.png?ip/crop/w225h384/q80/webp 1.5x" type="image/webp"><img src="//s.isanook.com/ho/0/di/tarot/new/queen-of-cups.png?ip/crop/w150h256/q80/png" fetchpriority="auto" alt="ไพ่ราชินีถือถ้วย (QUEEN OF CUPS)" width="150" height="256" srcset="//s.isanook.com/ho/0/di/tarot/new/queen-of-cups.png?ip/crop/w225h384/q80/png 1.5x"></picture></div><h2 class="jsx-4186821122 jsx-1100691687 entryTitle">ไพ่หมายเลข 3 ราชินีถือถ้วย (QUEEN OF CUPS)</h2><div id="EntryReader_0" class="jsx-4186821122 jsx-1100691687 EntryReaderInner"><p><strong>ไพ่ราชินีถือถ้วย (QUEEN OF CUPS)</strong></p>
            <p>เมื่อไพ่ราชินีถือถ้วย ปรากฏ นั่นคือ พลังความรักที่จะต้องแสดงออกแล้ว</p>
            <p>เมื่อไพ่ราชินีถือถ้วย ปรากฏ สำหรับคนโสด นั่นคือ ถึงเวลาได้พบความรัก รักที่ผูกพัน ที่ตามมาแต่ชาติปางก่อน ขอเพียงแต่ตั้งจิตอธิษฐาน ขอพรกับสิ่งศักดิสิทธ์ที่คุณนับถือ คู่บุญ บารมีของคุณก็จะ..ปรากฏ</p>
            <p>ให้ได้ครองรัก ครองคู่ แต่ให้ระวังความรักที่หลงงมงาย ฝันเฟื่อง สร้างฝัน วาดวิมานในอากาศ อาจทำให้ได้เจอแต่ คู่เวร คู่กรรม ที่ตามมาให้คุณต้องชดใช้ก็..เป็นไปได้ เช่นกัน&nbsp;</p>
            <p>แต่กับสัมพันธ์รักที่คุณเริ่มรู้สึกว่ามันชืดชา น่าเบื่อ ปรับปรุงตัวเองให้เป็นคนใหม่ ให้ดูสดใส เร้าใจ และดูเร่าร้อน หรือหาที่ปรึกษาที่ชำนาญเรื่องสร้างเสน่ห์โดยเฉพาะเรื่องสันพันธ์ทางเพศ ก็จะทำให้บรรยากาศรักมีโอกาสดีขึ้นกว่าที่เป็นอยู่</p>
            <p>&nbsp;</p> <button type="submit" onclick="window.location.reload()" class="btn-next">ทำนายต่อ</button>`,
            `<div class="jsx-4186821122 jsx-1100691687"><div class="jsx-1910754571 thumbnail"><picture><source srcset="//s.isanook.com/ho/0/di/tarot/new/queen-of-wands.png?ip/crop/w150h256/q80/webp, //s.isanook.com/ho/0/di/tarot/new/queen-of-wands.png?ip/crop/w225h384/q80/webp 1.5x" type="image/webp"><img src="//s.isanook.com/ho/0/di/tarot/new/queen-of-wands.png?ip/crop/w150h256/q80/png" fetchpriority="auto" alt="ไพ่ราชินีถือไม้เท้า (QUEEN OF WANDS)" width="150" height="256" srcset="//s.isanook.com/ho/0/di/tarot/new/queen-of-wands.png?ip/crop/w225h384/q80/png 1.5x"></picture></div><h2 class="jsx-4186821122 jsx-1100691687 entryTitle">ไพ่หมายเลข 8 ราชินีถือไม้เท้า (QUEEN OF WANDS)</h2><div id="EntryReader_0" class="jsx-4186821122 jsx-1100691687 EntryReaderInner"><p><strong>ไพ่ราชินีถือไม้เท้า (QUEEN OF WANDS)</strong></p>
            <p>เมื่อไพ่ราชินีถือไม้เท้า ปรากฏ นั่นคือ ให้ควบคุมอารมณ์!</p>
            <p>เมื่อคนโสด เปิดพบ ไพ่ราชินีถือไม้เท้า หมายถึง เป็นระยะเวลาที่ต้องควบคุมสติให้ดีๆ เพราะมีโอกาสที่คุณจะเจอเขาหรือเธอ ที่ทำให้ ..ตกหลุมรัก..อย่างสะดุดโครม ที่อาจทำให้เผลอไผล เผลอตัว แสดงความรู้สึก แสดงออกถึงความหลงใหล คลั่งไคล้ ความปรารถนา ที่เห็นชัดเกินไป จนอาจดู..ไม่มีค่า..กับเขาหรือเธอ ที่คุณสนใจ</p>
            <p>และสำหรับคนมีคู่รัก คู่ครอง เมื่อพบเจอไพ่ใบนี้ ..ราชินีถือไม้เท้า.. นั่นคือ ความสัมพันธ์จะเต็มไปด้วยชีวิตชีวา เผ็ดร้อน และเร้าใจ เมื่อคุณแสดงออกให้เห็นชัดเจน ถึงความรัก ความปรารถนาที่เร่าร้อนกับคนที่คุณรัก</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p></div></div> <button type="submit" onclick="window.location.reload()" class="btn-next">ทำนายต่อ</button>`,
            `<div class="jsx-4186821122 jsx-1100691687"><div class="jsx-1910754571 thumbnail"><picture><source srcset="//s.isanook.com/ho/0/di/tarot/new/the-sun.png?ip/crop/w150h256/q80/webp, //s.isanook.com/ho/0/di/tarot/new/the-sun.png?ip/crop/w225h384/q80/webp 1.5x" type="image/webp"><img src="//s.isanook.com/ho/0/di/tarot/new/the-sun.png?ip/crop/w150h256/q80/png" fetchpriority="auto" alt="ไพ่หมายเลข 19 THE SUN" width="150" height="256" srcset="//s.isanook.com/ho/0/di/tarot/new/the-sun.png?ip/crop/w225h384/q80/png 1.5x"></picture></div><h2 class="jsx-4186821122 jsx-1100691687 entryTitle">ไพ่หมายเลข 9 THE SUN</h2><div id="EntryReader_0" class="jsx-4186821122 jsx-1100691687 EntryReaderInner"><p><strong>THE SUN (XIX)</strong></p>
            <p>ดาวอาทิตย์ เทพแห่งแสงสว่าง ที่จะมาเปิดตา เปิดใจ ให้พ้นจากความมืดมน..หรือ พบเส้นทางชีวิตใหม่ที่สดใส และมีความสุข</p>
            <p>คนโสด เมื่อเปิดไพ่พยากรณ์ พบ THE SUN ในวันนี้ นั่นหมายถึงคุณอาจเป็นที่สะดุดตา สะดุดใจกับเพศตรงข้ามที่มั่งคั่ง หรือ สูงส่ง กว่า อาจเป็นนายจ้าง ..เจ้านาย ผู้บังคับบัญชา</p>
            <p>สำหรับคนมีคู่รัก คู่ครอง เมื่อพบเจอ THE SUN นั่นหมายถึงคุณควรวางแผน หาที่พักร้อนไปเริงร่ากัน ณ หาดทราย ชายทะเล ที่มีแสงอาทิตย์เจิดจ้า ก็จะทำให้ความรักสดใส มีสีสรรมากขึ้น&nbsp;แต่ที่ควรระวัง แสงเจิดจ้าแห่ง<a href="https://www.sanook.com/horoscope/" title="ดวง" target="_blank" class="keyword">ดวง</a>อาทิตย์ อาจเพิ่มอัตตา ความถือดี ว่า ...แน่.. จนบดบังปัญญาที่ชาญฉลาดของคุณให้มืดบอด อาจถูกหลอกลวง ปกปิด จากผู้ที่มีปฏิสัมพันธ์ด้วย พิจารณาด้วยใจที่ปราศจากอคติ แล้ว..ความจริงจะปรากฏ</p></div></div> <button type="submit" onclick="window.location.reload()" class="btn-next">ทำนายต่อ</button>`

        ];

        // Generate a random index
        const randomIndex = Math.floor(Math.random() * textOptions.length);

        // Display the random text with image
        setTimeout(function () {
            $('#loader').hide();
            clickSound.play();
            $('#horoscope').html(textOptions[randomIndex]);
        }, 3000);
    });

    function randomText() {
        // Array of random text options

    }

    $('.btn-next').click(function() {
        window.location.reload();
    });

});


