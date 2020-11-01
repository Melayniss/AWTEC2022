<template>
  <div id="Preparation">
    <!--    banner-->
    <div class="banner container-fuild text-center">
      {{ title }}
    </div>

    <!--    visa-->
    <div class="container-fluid">
      <div class="container">
        <div class="visa-box">
          <div class="text-center">
            <h2>
              {{ visa.title }}
            </h2>
            <br>
            <p style="color: #b2b2b2">
              {{ visa.subtitle }}
            </p>
          </div>

          <div class="container-fluid">
            <p class="visa-p" v-for="(item) in visa.content">
              {{ item.p }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <!--    会议安排-->
    <div class="container-fluid">
      <div class="container">
        <div class="meeting-box">
          <div class="text-center">
            <h2>
              {{ meeting.title }}
            </h2>
            <br>
            <p style="color: #b2b2b2">
              {{ meeting.subtitle }}
            </p>
          </div>

          <div class="container-fluid"
               style="display:flex;align-items: center;justify-content: center;flex-direction: column">

            <!--            img形式无法居中，采用pdf转html格式直接修改展示-->
            <!--            <div class="col-xs-12 col-sm-6 col-md-3 wow slideInUp"-->
            <!--                 style="flex: auto;width: 800px;">-->
            <!--              <div class="meeting-img">-->
            <!--                <img src="../assets/img/other/meeting_1.png" alt="">-->
            <!--              </div>-->
            <!--            </div>-->

            <!--            table of the conference-->
            <div style="flex: auto">
              <ul>
                <li><p style="padding-top: 9pt;padding-left: 26pt;text-indent: -21pt;text-align: left;">The time slots
                  for oral presentations, start in 2022, November 11st, are</p></li>
                <li><p style="padding-top: 9pt;padding-left: 26pt;text-indent: -21pt;text-align: left;">Keynote speech:
                  45
                  minutes</p></li>
                <li><p style="padding-top: 9pt;padding-left: 26pt;text-indent: -21pt;text-align: left;">Invited speech:
                  30
                  minutes</p></li>
                <li><p style="padding-top: 8pt;padding-left: 26pt;text-indent: -21pt;text-align: left;">Paper
                  presentation: 15 or 20
                  minutes each, depending on the tradition of AWTEC</p></li>
              </ul>
              <br><br>
              <p style="text-indent: 0pt;text-align: center;">First day</p>
              <br><br>
              <table style="border-collapse:collapse;margin-left:5.25pt" cellspacing="0">
                <tr style="height:24pt">
                  <td
                    style="width:90pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p style="padding-right: 9pt;text-indent: 0pt;line-height: 13pt;text-align: right;">
                      16:00‐18:30</p></td>
                  <td
                    style="width:361pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p style="padding-left: 5pt;text-indent: 0pt;line-height: 13pt;text-align: left;">
                      Registration
                      desk open at the Dragon Hotel, Hangzhou</p></td>
                </tr>
                <tr style="height:23pt">
                  <td
                    style="width:90pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p style="padding-right: 9pt;text-indent: 0pt;line-height: 13pt;text-align: right;">
                      17:00‐18:30</p></td>
                  <td
                    style="width:361pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p style="padding-left: 5pt;text-indent: 0pt;line-height: 13pt;text-align: left;">Welcome
                      reception at the Dragon Hotel, Hangzhou</p></td>
                </tr>
              </table>
              <br><br>
              <p style="padding-top: 9pt;text-indent: 0pt;text-align: center;">Second day</p>
              <br><br>
              <table style="border-collapse:collapse;margin-left:5.25pt" cellspacing="0">
                <tr style="height:23pt">
                  <td
                    style="width:90pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p class="s1"
                       style="padding-left: 11pt;padding-right: 10pt;text-indent: 0pt;line-height: 13pt;text-align: center;">
                      08:30‐17:00</p></td>
                  <td
                    style="width:361pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p style="padding-left: 5pt;text-indent: 0pt;line-height: 13pt;text-align: left;">
                      Registration
                      desk open</p></td>
                </tr>
                <tr style="height:24pt">
                  <td
                    style="width:90pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p class="s1"
                       style="padding-left: 11pt;padding-right: 10pt;text-indent: 0pt;line-height: 13pt;text-align: center;">
                      09:00‐09:10</p></td>
                  <td
                    style="width:361pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p style="padding-left: 5pt;text-indent: 0pt;line-height: 13pt;text-align: left;">Opening
                      ceremony</p></td>
                </tr>
                <tr style="height:24pt">
                  <td
                    style="width:90pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p class="s1"
                       style="padding-left: 11pt;padding-right: 10pt;text-indent: 0pt;line-height: 13pt;text-align: center;">
                      09:10‐10:40</p></td>
                  <td
                    style="width:361pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p style="padding-left: 5pt;text-indent: 0pt;line-height: 13pt;text-align: left;">Keynote
                      lectures on wave energy</p></td>
                </tr>
                <tr style="height:23pt">
                  <td
                    style="width:90pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p class="s1"
                       style="padding-left: 11pt;padding-right: 10pt;text-indent: 0pt;line-height: 13pt;text-align: center;">
                      10:40‐11:00</p></td>
                  <td
                    style="width:361pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p style="padding-left: 5pt;text-indent: 0pt;line-height: 13pt;text-align: left;">Break
                      and Group
                      Photograph</p></td>
                </tr>
                <tr style="height:24pt">
                  <td
                    style="width:90pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p class="s1"
                       style="padding-left: 11pt;padding-right: 10pt;text-indent: 0pt;line-height: 13pt;text-align: center;">
                      11:00‐12:20</p></td>
                  <td
                    style="width:361pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p style="padding-left: 5pt;text-indent: 0pt;line-height: 13pt;text-align: left;">
                      Parallel
                      Sessions</p></td>
                </tr>
                <tr style="height:24pt">
                  <td
                    style="width:90pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p class="s1"
                       style="padding-left: 11pt;padding-right: 10pt;text-indent: 0pt;line-height: 13pt;text-align: center;">
                      12:20‐13:20</p></td>
                  <td
                    style="width:361pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p style="padding-left: 5pt;text-indent: 0pt;line-height: 13pt;text-align: left;">
                      Lunch</p></td>
                </tr>
                <tr style="height:23pt">
                  <td
                    style="width:90pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p class="s1"
                       style="padding-left: 11pt;padding-right: 10pt;text-indent: 0pt;line-height: 13pt;text-align: center;">
                      13:20‐15:25</p></td>
                  <td
                    style="width:361pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p style="padding-left: 5pt;text-indent: 0pt;line-height: 13pt;text-align: left;">Invited
                      speeches + Parallel sessions</p></td>
                </tr>
                <tr style="height:24pt">
                  <td
                    style="width:90pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p class="s1"
                       style="padding-left: 11pt;padding-right: 10pt;text-indent: 0pt;line-height: 13pt;text-align: center;">
                      15:25‐15:40</p></td>
                  <td
                    style="width:361pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p style="padding-left: 5pt;text-indent: 0pt;line-height: 13pt;text-align: left;">
                      Break</p></td>
                </tr>
                <tr style="height:23pt">
                  <td
                    style="width:90pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p class="s1"
                       style="padding-left: 11pt;padding-right: 10pt;text-indent: 0pt;line-height: 13pt;text-align: center;">
                      15:40‐17:40</p></td>
                  <td
                    style="width:361pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p style="padding-left: 5pt;text-indent: 0pt;line-height: 13pt;text-align: left;">
                      Parallel
                      Sessions</p></td>
                </tr>
                <tr style="height:24pt">
                  <td
                    style="width:90pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p class="s1"
                       style="padding-left: 11pt;padding-right: 10pt;text-indent: 0pt;line-height: 13pt;text-align: center;">
                      18:30‐20:30</p></td>
                  <td
                    style="width:361pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p style="padding-left: 5pt;text-indent: 0pt;line-height: 13pt;text-align: left;">
                      Reception
                      Dinner</p></td>
                </tr>
              </table>
              <br><br>
              <p style="padding-top: 5pt;text-indent: 0pt;text-align: center;">Third day</p>
              <br><br>
              <table style="border-collapse:collapse;margin-left:5.25pt" cellspacing="0">
                <tr style="height:24pt">
                  <td
                    style="width:90pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p class="s1"
                       style="padding-left: 11pt;padding-right: 10pt;text-indent: 0pt;line-height: 13pt;text-align: center;">
                      08:00‐17:00</p></td>
                  <td
                    style="width:361pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p style="padding-left: 5pt;text-indent: 0pt;line-height: 13pt;text-align: left;">Registration
                      desk open</p></td>
                </tr>
                <tr style="height:24pt">
                  <td
                    style="width:90pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p class="s1"
                       style="padding-left: 11pt;padding-right: 10pt;text-indent: 0pt;line-height: 13pt;text-align: center;">
                      08:30‐10:00</p></td>
                  <td
                    style="width:361pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p style="padding-left: 5pt;text-indent: 0pt;line-height: 12pt;text-align: left;">Keynote
                      Lectures on tidal/ocean current energy</p></td>
                </tr>
                <tr style="height:23pt">
                  <td
                    style="width:90pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p class="s1"
                       style="padding-left: 11pt;padding-right: 10pt;text-indent: 0pt;line-height: 13pt;text-align: center;">
                      10:00‐10:20</p></td>
                  <td
                    style="width:361pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p style="padding-left: 5pt;text-indent: 0pt;line-height: 13pt;text-align: left;">
                      Break</p></td>
                </tr>
                <tr style="height:24pt">
                  <td
                    style="width:90pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p class="s1"
                       style="padding-left: 11pt;padding-right: 10pt;text-indent: 0pt;line-height: 13pt;text-align: center;">
                      10:20‐12:00</p></td>
                  <td
                    style="width:361pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p style="padding-left: 5pt;text-indent: 0pt;line-height: 13pt;text-align: left;">
                      Parallel
                      Sessions</p></td>
                </tr>
                <tr style="height:24pt">
                  <td
                    style="width:90pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p class="s1"
                       style="padding-left: 11pt;padding-right: 10pt;text-indent: 0pt;line-height: 13pt;text-align: center;">
                      12:00‐13:20</p></td>
                  <td
                    style="width:361pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p style="padding-left: 5pt;text-indent: 0pt;line-height: 13pt;text-align: left;">
                      Lunch</p></td>
                </tr>
                <tr style="height:24pt">
                  <td
                    style="width:90pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p class="s1"
                       style="padding-left: 11pt;padding-right: 10pt;text-indent: 0pt;line-height: 13pt;text-align: center;">
                      13:20‐15:25</p></td>
                  <td
                    style="width:361pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p style="padding-left: 5pt;text-indent: 0pt;line-height: 13pt;text-align: left;">Invited
                      speeches + Parallel sessions</p></td>
                </tr>
                <tr style="height:23pt">
                  <td
                    style="width:90pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p class="s1"
                       style="padding-left: 11pt;padding-right: 10pt;text-indent: 0pt;line-height: 13pt;text-align: center;">
                      15:25‐15:50</p></td>
                  <td
                    style="width:361pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p style="padding-left: 5pt;text-indent: 0pt;line-height: 13pt;text-align: left;">
                      Break</p></td>
                </tr>
                <tr style="height:24pt">
                  <td
                    style="width:90pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p class="s1"
                       style="padding-left: 11pt;padding-right: 10pt;text-indent: 0pt;line-height: 13pt;text-align: center;">
                      5:50‐17:30</p></td>
                  <td
                    style="width:361pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p style="padding-left: 5pt;text-indent: 0pt;line-height: 13pt;text-align: left;">Poster
                      sessions</p></td>
                </tr>
                <tr style="height:47pt">
                  <td
                    style="width:90pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p class="s1"
                       style="padding-left: 11pt;padding-right: 10pt;text-indent: 0pt;line-height: 13pt;text-align: center;">
                      18:30‐21:00</p></td>
                  <td
                    style="width:361pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p style="padding-left: 5pt;text-indent: 0pt;line-height: 13pt;text-align: left;">
                      Organizing
                      Committee meeting and dinner at the Dragon Hotel,</p>
                    <p style="padding-top: 8pt;padding-left: 5pt;text-indent: 0pt;text-align: left;">
                      Hangzhou</p>
                  </td>
                </tr>
              </table>
              <br><br>
              <p style="text-indent: 0pt;text-align: center;">Fourth day</p>
              <br><br>
              <table style="border-collapse:collapse;margin-left:5.25pt" cellspacing="0">
                <tr style="height:23pt">
                  <td
                    style="width:90pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p class="s1"
                       style="padding-left: 11pt;padding-right: 10pt;text-indent: 0pt;line-height: 13pt;text-align: center;">
                      08:30‐17:00</p></td>
                  <td
                    style="width:361pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p style="padding-left: 5pt;text-indent: 0pt;line-height: 13pt;text-align: left;">
                      Registration
                      desk open</p></td>
                </tr>
                <tr style="height:24pt">
                  <td
                    style="width:90pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p class="s1"
                       style="padding-left: 11pt;padding-right: 10pt;text-indent: 0pt;line-height: 13pt;text-align: center;">
                      09:00‐09:45</p></td>
                  <td
                    style="width:361pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p style="padding-left: 5pt;text-indent: 0pt;line-height: 13pt;text-align: left;">Keynote
                      speech
                      on hybrid offshore wind energy</p></td>
                </tr>
                <tr style="height:23pt">
                  <td
                    style="width:90pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p class="s1"
                       style="padding-left: 11pt;padding-right: 10pt;text-indent: 0pt;line-height: 13pt;text-align: center;">
                      09:45‐10:10</p></td>
                  <td
                    style="width:361pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p style="padding-left: 5pt;text-indent: 0pt;line-height: 13pt;text-align: left;">
                      Break</p></td>
                </tr>
                <tr style="height:24pt">
                  <td
                    style="width:90pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p class="s1"
                       style="padding-left: 11pt;padding-right: 10pt;text-indent: 0pt;line-height: 13pt;text-align: center;">
                      10:10‐11:50</p></td>
                  <td
                    style="width:361pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p style="padding-left: 5pt;text-indent: 0pt;line-height: 13pt;text-align: left;">
                      Parallel
                      Sessions</p></td>
                </tr>
                <tr style="height:24pt">
                  <td
                    style="width:90pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p class="s1"
                       style="padding-left: 11pt;padding-right: 10pt;text-indent: 0pt;line-height: 13pt;text-align: center;">
                      11:50‐13:20</p></td>
                  <td
                    style="width:361pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p style="padding-left: 5pt;text-indent: 0pt;line-height: 13pt;text-align: left;">
                      Lunch</p></td>
                </tr>
                <tr style="height:23pt">
                  <td
                    style="width:90pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p class="s1"
                       style="padding-left: 11pt;padding-right: 10pt;text-indent: 0pt;line-height: 13pt;text-align: center;">
                      13:20‐15:00</p></td>
                  <td
                    style="width:361pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p style="padding-left: 5pt;text-indent: 0pt;line-height: 13pt;text-align: left;">
                      Parallel
                      sessions</p></td>
                </tr>
                <tr style="height:23pt">
                  <td
                    style="width:90pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p class="s1"
                       style="padding-left: 11pt;padding-right: 10pt;text-indent: 0pt;line-height: 13pt;text-align: center;">
                      15:00‐15:20</p></td>
                  <td
                    style="width:361pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p style="padding-left: 5pt;text-indent: 0pt;line-height: 13pt;text-align: left;">
                      Break</p></td>
                </tr>
                <tr style="height:24pt">
                  <td
                    style="width:90pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p class="s1"
                       style="padding-left: 11pt;padding-right: 10pt;text-indent: 0pt;line-height: 13pt;text-align: center;">
                      15:20‐17:00</p></td>
                  <td
                    style="width:361pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p style="padding-left: 5pt;text-indent: 0pt;line-height: 13pt;text-align: left;">
                      Parallel
                      sessions</p></td>
                </tr>
                <tr style="height:24pt">
                  <td
                    style="width:90pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p class="s1"
                       style="padding-left: 11pt;padding-right: 10pt;text-indent: 0pt;line-height: 13pt;text-align: center;">
                      18:00‐20:30</p></td>
                  <td
                    style="width:361pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p style="padding-left: 5pt;text-indent: 0pt;line-height: 13pt;text-align: left;">Closing
                      ceremony &amp; Conference Banquet</p></td>
                </tr>
              </table>
              <br><br>
              <p style="text-indent: 0pt;text-align: center;">Fifth day</p>
              <br><br>
              <table style="border-collapse:collapse;margin-left:5.25pt" cellspacing="0">
                <tr style="height:24pt">
                  <td
                    style="width:90pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p style="padding-left: 19pt;text-indent: 0pt;line-height: 13pt;text-align: left;">
                      9:30‐16:00</p>
                  </td>
                  <td
                    style="width:361pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                    <p style="padding-left: 5pt;text-indent: 0pt;line-height: 13pt;text-align: left;">
                      Technical
                      tour</p></td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
import {WOW} from 'wowjs';

export default {
  name: 'Preparation',
  data() {
    return {
      title: 'Preparation',
      subtitle: 'Pre-Work You Need to Focus',
      Transportation: '',
      preparationList: [
        {
          text: 'Where you will live →',
          title: 'Accommodation',
          path: '/preparation/accommodation'
        },
        {
          text: 'How you come here →',
          title: 'Transportation',
          path: '/preparation/transportation'
        },
        {
          text: 'If any question bothers you →',
          title: 'FAQs',
          path: '/preparation/tours'
        },
        {
          text: 'Want to get contact with the committees →',
          title: 'Contact Us',
          path: '/preparation/us'
        }
      ],

      visa: {
        title: 'Visa',
        subtitle: 'Essential Works',
        content: [
          {
            p: 'In general, most visitors will be required to show a Chinese visa when entering China. We strongly advise that participants should arrange for their visas application at least TWO months before their departure for China. It is advised to consult the nearest Chinese diplomatic mission for more information about the visa application.'
          },
          {
            p: 'We will issue an official invitation letter for Visa application on request. The participants need send the filled registration form of required information of invitation letter for VISA and the scanned passport to the specific mailbox. If the participants come to China with family members, please also provide the corresponding information of the family members. We will generate an official invitation letter to include them. Our secretariat will deal with the requirement at regular time, and post the invitation letter to the supplied address by express.'
          },
          {
            p: 'Moreover, participants need to provide the following documents to apply for a BUSINESS visa to participate in the AWTEC 2022:'
          },
          {
            p: '* A completed visa application form ;'
          },
          {
            p: '* One recent passport photograph ;'
          },
          {
            p: '* Current passport which is valid for over 6 months from the date of entry into China ;'
          },
          {
            p: '* Return flight tickets ;'
          },
          {
            p: '* Hotel confirmation letter ;'
          }
        ]
      },

      meeting: {
        title: 'Conference Detail',
        subtitle: 'Tentative Program'
      },
    }
  },
  mounted() {
    var wow = new WOW();
    wow.init();
  }
}
</script>

<style scoped>
.banner {
  color: #fff;
  font-size: 30px;
  height: 150px;
  line-height: 150px;
  background-image: url("../assets/img/banners/banner_4.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: scroll;
  background-position: center center;
}

.preparationIntro-container {
  padding: 100px 0;
  color: #808080;
  transition: all ease 0.5s;
}

.preparationIntro-container > div > p {
  font-size: 14px;
  line-height: 2.5rem;
}

.visa-box {
  margin: 80px 0 0 0;
  padding: 30px;
  transition: all ease 0.5s;
  border: 1px dashed indianred;
}

.visa-p {
  padding-left: 20pt;
  text-indent: -21pt;
  line-height: 14pt;
  text-align: left;
  white-space: pre-wrap;
}

.meeting-box {
  margin: 80px 0 80px 0;
  padding: 30px;
  transition: all ease 0.5s;
  border: 1px dashed lightpink;
}


@media screen and (max-width: 997px) {
  .preparationIntro-container {
    padding: 10px 0;
    color: #808080;
  }
}
</style>

<!--        <div class="col-xs-12 col-sm-12 col-md-6 wow zoomIn">  -->
<!--            <img class="img-responsive center-block" src="../assets/img/xxxxxxxxxxxxx.png" alt="">  -->
<!--        </div>  -->


<!--.meeting-img {-->
<!--position: relative;-->
<!--overflow: hidden;-->
<!--}-->

<!--.meeting-img img {-->
<!--width: 100%;-->
<!--transition: all 0.5s ease;-->
<!--}-->


<!--<div class="container">-->
<!--<div class="row preparationIntro-container">-->
<!--  <div class="col-xs-12 col-sm-12 col-md-6">-->
<!--    <h3>{{ subtitle }}</h3>-->
<!--    <ul>-->
<!--      <li class=".text-justify"-->
<!--          v-for="(item,index) in preparationList"-->
<!--          :key="index"-->
<!--      >-->
<!--        {{ item.text }}-->
<!--        <router-link :to="item.path">-->
<!--          {{ item.title }}-->
<!--        </router-link>-->
<!--      </li>-->
<!--    </ul>-->
<!--  </div>-->
<!--</div>-->
<!--</div>-->
