    function reply(msg) {
      switch (msg) {
        case "HzWZauto":
          //   DisModeHzWZ.setTextColor("yellow");
          break;
        case "HzWZman":
          //    DisModeHzWZ.setTextColor("yellow");
          break;
        case "HzWZparty":
          //    DisModeHzWZ.setTextColor("yellow");
          break;
        case "HzWZurlaub":
          //     DisModeHzWZ.setTextColor("yellow");
          break;

        case "HzKZauto":
          //    DisModeHzKZ.setTextColor("yellow");
          break;
        case "HzKZman":
          //    DisModeHzKZ.setTextColor("yellow");
          break;
        case "HzKZparty":
          //   DisModeHzKZ.setTextColor("yellow");
          break;
        case "HzKZurlaub":
          //  DisModeHzKZ.setTextColor("yellow");
          break;

        case "HzSZauto":
          //  DisModeHzSZ.setTextColor("yellow");
          break;
        case "HzSZman":
          //  DisModeHzSZ.setTextColor("yellow");
          break;
        case "HzSZparty":
          //   DisModeHzSZ.setTextColor("yellow");
          break;
        case "HzSZurlaub":
          //  DisModeHzSZ.setTextColor("yellow");
          break;

        case "HzKauto":
          //   DisModeHzK.setTextColor("yellow");
          break;
        case "HzKman":
          //  DisModeHzK.setTextColor("yellow");
          break;
        case "HzKparty":
          //   DisModeHzK.setTextColor("yellow");
          break;
        case "HzKurlaub":
          //   DisModeHzK.setTextColor("yellow");
          break;
      }
    }

    function showAList(text) {
      AList.update(text);
    }


    function checkUsedVars(ips) {
      var sym = [];
      try {
        sym[0] = ips[0].ID23116; //Temperatur SZ
        sym[1] = ips[0].ID37045; //Temperatur KZ
        sym[2] = ips[0].ID51079; //Temperatur WZ
        sym[3] = ips[0].ID54070; //Temperatur K
        sym[4] = ips[0].ID18059; //Position HZ WZ
        sym[5] = ips[0].ID49335; //Position HZ KZ
        sym[6] = ips[0].ID36448; //Position HZ SZ 
        sym[7] = ips[0].ID51619; //Position HZ K   
        sym[8] = ips[0].ID36168; // Diele Präsenzmelder
        sym[9] = ips[0].ID22196; // Diele Haustür   
        sym[10] = ips[0].ID56454; // humidity KZ
        sym[11] = ips[0].ID50329; // humidity SZ  

        sym[12] = ips[0].ID54298; //Rollo KZ Mode
        sym[13] = ips[0].ID59964; //Rollo KZ Postion 


        sym[16] = ips[0].ID53773; //Rollo WZ up/down
        sym[17] = ips[0].ID49991; //Rollo WZ Position
        sym[18] = ips[0].ID13953; //Rollo WZ Mode
        sym[19] = ips[0].ID21488; //Rollo WZ Schaltzeit Mo-Fr
        sym[20] = ips[0].ID37176; //Rollo WZ Schaltzeit Sa-So 
        sym[53] = ips[0].ID15822; //Rollo WZ SSunSet  

        sym[21] = ips[0].ID57642; //Rollo B Mode
        sym[22] = ips[0].ID25065; //Rollo B Postion          
        sym[23] = ips[0].ID57942; //Sonnenuntergang
        sym[24] = ips[0].ID11938; //Sonnenaufgang
        sym[25] = ips[0].ID37348; //Balkontür
        sym[26] = ips[0].ID53071; //Soll Modus Hz WZ
        sym[27] = ips[0].ID31769; //Soll Temp Hz WZ 
        sym[28] = ips[0].ID27789; //Soll Temp Ausstehend Hz WZ
        sym[29] = ips[0].ID23472; //Bat Hz WZ
        sym[30] = ips[0].ID52085; //Bat Hz KZ
        sym[31] = ips[0].ID57118; //Bat Hz SZ
        sym[32] = ips[0].ID22083; //Bat Hz K
        sym[33] = ips[0].ID34102; //Soll Modus Hz KZ
        sym[34] = ips[0].ID36377; //Soll Temp Hz KZ 
        sym[35] = ips[0].ID38441; //Soll Temp Ausstehend Hz KZ
        sym[36] = ips[0].ID31202; //Soll Modus Hz SZ
        sym[37] = ips[0].ID17998; //Soll Temp Hz SZ 
        sym[38] = ips[0].ID51755; //Soll Temp Ausstehend Hz SZ
        sym[39] = ips[0].ID26565; //Temp Vor Hz SZ
        sym[40] = ips[0].ID32007; //Temp Rueck Hz SZ  
        sym[41] = ips[0].ID39562; //Soll Modus Hz K
        sym[42] = ips[0].ID54426; //Soll Temp Hz K 
        sym[43] = ips[0].ID21258; //Soll Temp Ausstehend Hz K     
        sym[44] = ips[0].ID41310; //Battery Alarm  
        sym[45] = ips[0].ID53083; //Security Meldung
        sym[46] = ips[0].ID16709; //Temperatur Balkon Aussen
        sym[47] = ips[0].ID27502; //Humidity Balkon Aussen
        sym[48] = ips[0].ID44154; //Alarm Anlage aktiv

        sym[14] = ips[0].ID53769; //Rollo K Mode
        sym[15] = ips[0].ID11004; //Rollo K Postion 
        sym[49] = ips[0].ID13003; //Rollo K up/down
        sym[50] = ips[0].ID34905; //Rollo K Schaltzeit Mo-Fr
        sym[51] = ips[0].ID52660; //Rollo K Schaltzeit Sa-So
        sym[52] = ips[0].ID28605; //Rollo K SSunSet  


        sym[21] = ips[0].ID25457; //Rollo B Mode
        sym[22] = ips[0].ID26881; //Rollo B Postion 
        sym[54] = ips[0].ID42649; //Rollo B up/Down
        sym[55] = ips[0].ID41457;; //Rollo B Schaltzeit Mo-Fr
        sym[56] = ips[0].ID25503; //Rollo B Schaltzeit Sa-So
        sym[57] = ips[0].ID11634; // Rollo B SunSet active  

        sym[58] = ips[0].ID36168; //Anwesenheit Stste Diele
        sym[59] = ips[0].ID30280; //Bad Fenster Aktor LowBat
        sym[60] = ips[0].ID49846; //Bad Taster-Fenster LowBat
        sym[61] = ips[0].ID33304; //Balkon Temp Feuchte Sensor LowBat
        sym[62] = ips[0].ID26399; //Diele Präsenzmelder LowBat
        sym[63] = ips[0].ID25322; //Haustür Kontakt LowBat
        sym[64] = ips[0].ID38784; //Kinderzimmer Temp-Feuchte Sensor LowBat
        sym[65] = ips[0].ID16681; //Küche Wassermelder LowBat
        sym[66] = ips[0].ID18803; //Schlafzimmer Feuchte Sensor LowBat
        sym[67] = ips[0].ID50294; //Sabotage Alarm Bewegungsmelder Diele
        sym[68] = ips[0].ID54473; //Wasser Sensor Küche Alarm
        sym[69] = ips[0].ID23685; //Wasser Sensor Küche Feuchte
        sym[70] = ips[0].ID27499; //Wasser Sensor Küche Wasserstand
        sym[71] = ips[0].ID20350; //Wasser Sensor Bad Batterie
        sym[72] = ips[0].ID58710; //Wasser Sensor Bad Alarm
        sym[73] = ips[0].ID17453; //Wasser Sensor Bad Feuchte
        sym[74] = ips[0].ID36414; //Wasser Sensor Bad Wasserstand
        sym[75] = ips[0].ID23042; //TV Volume
        sym[76] = ips[0].ID34392; //TV Power
        sym[77] = ips[0].ID43304; //TV Channel - 15810
        sym[78] = ips[0].ID53698; //TV Channel Name - 41307
        sym[79] = ips[0].ID26003; //TV Source 24408
        sym[80] = ips[0].ID35428; //TV SourceList 45960
        sym[81] = ips[0].ID16753; //Denon Server Name
        sym[82] = ips[0].ID32160; //SZ Sonos Artist
        sym[83] = ips[0].ID23875; //SZ Sonos Title
        sym[84] = ips[0].ID38320; //SZ Sonos Album
        sym[85] = ips[0].ID36157; //SZ Sonos Volume
        sym[86] = ips[0].ID24061; //SZ Sonos Mute
        sym[87] = ips[0].ID44467; //SZ Sonos Loudnes
        sym[88] = ips[0].ID55859; //SZ Sonos Bass
        sym[89] = ips[0].ID29767; //SZ Sonos Treble
        sym[90] = ips[0].ID57771; //SZ Sonos Playmode
        sym[91] = ips[0].ID35731; //SZ Sonos Cover image  
        sym[92] = ips[0].ID34292; //ArtisPicLastFM - Denon
        sym[93] = ips[0].ID30505; //DIDL Artist - Denon
        sym[94] = ips[0].ID17922; //DIDL Title - Denon
        sym[95] = ips[0].ID31822; //Line3 - Denon
        sym[96] = ips[0].ID22520; //Power - Denon
        sym[97] = ips[0].ID19185; //Volume - Denon
        sym[98] = ips[0].ID33459; //TVchProgList 31510
        sym[99] = ips[0].ID35025; //TVProgList  49099
        sym[100] = ips[0].ID54563; //Kochbuch Titel
        sym[101] = ips[0].ID18416; //Kochbuch Image
        sym[102] = JSON.parse(ips[0].ID29246); //Kochbuch Zutaten

        sym[103] = ips[0].ID59260; //Kochbuch Rezept
        sym[104] = ips[0].ID16493; //Kochbuch Liste
        sym[105] = ips[0].ID46852; //Denon Source
        sym[106] = ips[0].ID19506; //Lampe - Schalter State Schlafzimmer
        sym[107] = ips[0].ID35590; //Lampe - Schalter current Schlafzimmer
        sym[108] = ips[0].ID43083; //Lampe - Schalter Power Schlafzimmer
        sym[109] = ips[0].ID12561; //Lampe - Schalter EnergyCounter Schlafzimmer
        sym[110] = ips[0].ID17052; // Security Code
        sym[111] = JSON.parse(ips[0].ID44125) //Wetter Week Data
        sym[112] = JSON.parse(ips[0].ID46593) //Wetter NowDay Data

        sym[113] = ips[0].ID22052; //Rollo SZ Mode
        sym[114] = ips[0].ID18298; //Rollo SZ Postion 
        sym[115] = ips[0].ID58302; //Rollo SZ up/down
        sym[116] = ips[0].ID18740; //Rollo SZ Schaltzeit Mo-Fr
        sym[117] = ips[0].ID53883; //Rollo SZ Schaltzeit Sa-So
        sym[118] = ips[0].ID12349; //Rollo SZ SSunSet  

        sym[119] = ips[0].ID25277; //Rollo KZ Schaltzeit Sa-So
        sym[120] = ips[0].ID53747; //Rollo KZ SSunSet            
        sym[121] = ips[0].ID54434; //Rollo KZ up/down
        sym[122] = ips[0].ID28071; //Rollo KZ Schaltzeit Mo-Fr
        sym[123] = ips[0].ID34292; //Denon DIDL AlbumArt URL
        sym[124] = ips[0].ID42467; //WSS active
        sym[125] = ips[0].ID56321; //WSS Client 1
        sym[126] = ips[0].ID43949; //WSS Client 2
        sym[127] = ips[0].ID15131; //WSS Client 3
        sym[128] = ips[0].ID38435; //WSS Client 4
        sym[129] = JSON.parse(ips[0].ID26335); //UPNP Server Array
        var Server = [];
        var task_names = sym[129].map(function (task, index, array) {
          Server[index] = task.FriendlyName;
        });
        sym[130] = Server;
        sym[131] = JSON.parse(ips[0].ID59157); //UPNP Client Array
        var Client = [];
        var task_names = sym[131].map(function (task, index, array) {
          Client[index] = task.FriendlyName;
        });
        sym[132] = Client;

        sym[133] = ips[0].ID31626; //UPNP Server Icon
        sym[134] = ips[0].ID14390; //UPNP Client Icon   
        sym[135] = ips[0].ID31981; //UPNP Server key

        sym[136] = ips[0].ID16161; //CPU Frequemcy
        sym[137] = ips[0].ID12220; //CPU load 15min
        sym[138] = ips[0].ID41245; //CPU Temperature
        sym[139] = ips[0].ID54826; //CPU Voltage
        sym[140] = ips[0].ID19292; //IP
        sym[141] = ips[0].ID59797; //IPS Kernel STatus
        sym[142] = ips[0].ID41816; //IPS Version
        sym[143] = ips[0].ID29733; //Memory Free
        sym[144] = ips[0].ID39889; //Port Symcon
        sym[145] = ips[0].ID30080; //Port WSS
        sym[146] = ips[0].ID30080; //Mem SD Free

        sym[147] = ips[0].ID23367; //Error Code
        sym[148] = ips[0].ID56516; //Operating Voltage
        sym[149] = ips[0].ID20750; //RSSI Device
        sym[150] = ips[0].ID48787; //RSSI Peer
        sym[151] = ips[0].ID37634; //unreach

        sym[152] = ips[0].ID22446; //RSSI Device
        sym[153] = ips[0].ID53621; //RSSI Peer
        sym[154] = ips[0].ID51909; //unreach

        sym[155] = ips[0].ID20695; //RSSI Device
        sym[156] = ips[0].ID17718; //RSSI Peer
        sym[157] = ips[0].ID25178; //unreach

        sym[158] = ips[0].ID51834; //Duty Cycle
        sym[159] = ips[0].ID36971; // Error Code
        sym[160] = ips[0].ID29563; // Error Falt Position
        sym[161] = ips[0].ID14045; // Op voltage
        sym[162] = ips[0].ID23035; //RSSI Device
        sym[163] = ips[0].ID48609; //RSSI Peer
        sym[164] = ips[0].ID42463; //unreach

        sym[165] = ips[0].ID18797; //Duty Cycle
        sym[166] = ips[0].ID10775; // Error Code
        sym[167] = ips[0].ID36083; // Error Falt Position
        sym[168] = ips[0].ID35613; // Op voltage
        sym[169] = ips[0].ID48610; //RSSI Device
        sym[170] = ips[0].ID49852; //RSSI Peer
        sym[171] = ips[0].ID31856; //unreach

        sym[172] = ips[0].ID10422; // unreach
        sym[173] = ips[0].ID27255; // Error

        sym[174] = ips[0].ID53298; // act Temperature
        sym[175] = ips[0].ID46213; // Error Code
        sym[176] = ips[0].ID53923; // Error Overheat
        sym[177] = ips[0].ID29520; // RSSI Device
        sym[178] = ips[0].ID31167; // RSSI Peer
        sym[179] = ips[0].ID19200; // unreach

        sym[180] = ips[0].ID42477; // Op. voltage
        sym[181] = ips[0].ID32916; // RSSI Device
        sym[182] = ips[0].ID12503; // unreach

        sym[183] = ips[0].ID28998; // unreach

        sym[184] = ips[0].ID14236; // unreach

        sym[185] = ips[0].ID32177; // Fenster Position Bad

        sym[186] = ips[0].ID13580; // RSSI Device
        sym[187] = ips[0].ID38699; // RSSI Peer
        sym[188] = ips[0].ID47058; // unreach

        sym[189] = ips[0].ID39262; // RSSI Device
        sym[190] = ips[0].ID34051; // RSSI Peer
        sym[191] = ips[0].ID18170; // unreach

        sym[192] = ips[0].ID42279; //Lampe - Schalter State Wohnzimmer Fenster
        sym[193] = ips[0].ID58362; //Lampe - Schalter current Wohnzimmer Fenster
        sym[194] = ips[0].ID22672; //Lampe - Schalter Power Wohnzimmer Fenster
        sym[195] = ips[0].ID27048; //Lampe - Schalter EnergyCounter Wohnzimmer Fenster

        sym[196] = ips[0].ID12113; //Lampe - Schalter State Wohnzimmer Mitte
        sym[197] = ips[0].ID45930; //Lampe - Schalter current Wohnzimmer Mitte
        sym[198] = ips[0].ID57742; //Lampe - Schalter Power Wohnzimmer Mitte
        sym[199] = ips[0].ID21225; //Lampe - Schalter EnergyCounter Wohnzimmer Mitte

        sym[200] = ips[0].ID40790; // RSSI Device Diele
        sym[201] = ips[0].ID13713; // RSSI Peer Diele
        sym[202] = ips[0].ID38705; // unreach Diele

        sym[203] = ips[0].ID56831; //Lampe - Schalter State Diele
        sym[204] = ips[0].ID19440; //Lampe - Schalter current Diele
        sym[205] = ips[0].ID41504; //Lampe - Schalter Power Diele
        sym[206] = ips[0].ID16840; //Lampe - Schalter EnergyCounter Diele

        sym[207] = ips[0].ID10829; //Lampe - LOW BAT Schalterkontakt Diele
        sym[208] = ips[0].ID42787; //Lampe - Voltage Schalterkontakt Diele
        sym[209] = ips[0].ID25438; //Lampe - RSSI Device Schalterkontakt Diele
        sym[210] = ips[0].ID44332; //Lampe - UNREACH Schalterkontakt Diele

        sym[211] = ips[0].ID57825; //D Temp SZ Kanal 3
        sym[212] = ips[0].ID29076; //D Temp SZ Kanal 4
        sym[213] = ips[0].ID13507; //D Temp WZ Kanal 3
        sym[214] = ips[0].ID52998; //D Temp WZ Kanal 4
        sym[215] = ips[0].ID29170; //Temp Vor Hz WZ
        sym[216] = ips[0].ID47576; //Temp Rueck Hz WZ 

        sym[217] = ips[0].ID14488; // RSSI Device Steckdose
        sym[218] = ips[0].ID16447; // RSSI Peer Steckdose
        sym[219] = ips[0].ID26377; // unreach Steckdose

        sym[220] = ips[0].ID16201; // Homematic Server connected HM   
        sym[221] = ips[0].ID58903; // Homematic Server default HM  
        sym[222] = ips[0].ID44062; // Homematic Server duty cycle  HM
        sym[223] = ips[0].ID16055; // Homematic Server connected  HMIP
        sym[224] = ips[0].ID39565; // Homematic Server default HMIP  
        sym[225] = ips[0].ID29679; // Homematic Server description HMIP  
        sym[226] = ips[0].ID36540; // Homematic Server duty cycle HMIP  

        sym[227] = ips[0].ID37348; // Balkontür 
        sym[228] = ips[0].ID34489; // Präsenzsensor AZ
        sym[229] = ips[0].ID48642; // Lampe AZ
        sym[230] = ips[0].ID37348; // Tür Balkon
        sym[231] = ips[0].ID59969; // Bad Temperatur
        sym[232] = ips[0].ID14487; // Bad Humidity
        sym[233] = ips[0].ID19285; // Wohnzimmer Humidity
        sym[234] = ips[0].ID36753; // Wohnzimmer SollTempChanged
        sym[235] = ips[0].ID50046; // Kinderzimmer SollTempChanged
        sym[236] = ips[0].ID17734; // Küche SollTempChanged
        sym[237] = ips[0].ID10827; // Schlafzimmer SollTempChanged


      } catch (err) {
        document.getElementById("fehler").innerHTML = err.message;
      }
      let pos = sym.indexOf(undefined);
      if (pos != -1) {
        check(pos);

      }
      return sym;
    }




    function check(index) {
      $('fehler').innerHTML = "Variable  wrong ID:" + index;

    }


    //<!-- ************************ Übergabe nur eine Variable von IPS ************************  -->
    function updateIPSValue(ipsID, IPSValue) {
      switch (ipsID) {
        case x:
          // code block
          break;
        case y:
          // code block
          break;
        default:
          // code block
      }
    }


    function updateValues(sym) {
      /* --------------------------- Heizung Wohnzimmer --------------------------- */
      MainTempVHzWZ.update(sym[215], 1);
      MainTempRHzWZ.update(sym[216], 1);
      HzCtrlWZ.update(sym[28], sym[27], sym[234]);
      iHzWZ.update(sym[4]);
      DisModeHzWZ.update(sym[26]);
      DisTempHzWZ.update(sym[2], 1);
      DisPosHzWZCtrl.update(sym[4]);
      DisHumidWZCtrl.update(sym[233]);
      /* -------------------------- Heizung Schlafzimmer -------------------------- */
      MainTempVHzSZ.update(sym[39], 1);
      MainTempRHzSZ.update(sym[40], 1);
      iHzSZ.update(sym[6]);
      HzCtrlSZ.update(sym[38], sym[37], sym[237]);
      DisModeHzSZ.update(sym[36]);
      DisTempHzSZ.update(sym[0]);
      DisPosHzSZCtrl.update(sym[6]);
      DisHumidSZCtrl.update(sym[11]);
      /* -------------------------- Heizung Kinderzimmer -------------------------- */
      MainTempVHzKZ.update("0.0", 1);
      MainTempRHzKZ.update("0.0", 1);
      iHzKZ.update(sym[5]);
      HzCtrlKZ.update(sym[35], sym[34], sym[235]);
      DisModeHzKZ.update(sym[33]);
      DisTempHzKZ.update(sym[1], 1);
      DisPosHzKZCtrl.update(sym[5]);
      DisHumidKZCtrl.update(sym[10]);
      /* ----------------------------- Heizung Kueche ----------------------------- */
      MainTempVHzK.update("0.0", 1);
      MainTempRHzK.update("0.0", 1);
      iHzK.update(sym[7]);
      HzCtrlK.update(sym[43], sym[42], sym[236]);
      DisModeHzK.update(sym[41]);
      DisTempHzK.update(sym[3], 1);
      DisPosHzKCtrl.update(sym[7]);
      /* ---------------------------- Rollo Wohnzimmer ---------------------------- */
      iRolloWZ.update(sym[17]);
      DisPosRolloWZ.update(sym[17], 0);
      DisModeRolloWZ.update(sym[18]);
      DisST1RolloWZ.update(sym[19]);
      DisST2RolloWZ.update(sym[20]);
      CbSSrolloWZ.update(sym[53]);
      /* --------------------------- Rollo Schlafzimmer --------------------------- */
      iRolloSZ.update(sym[114]);
      DisModeRolloSZ.update(sym[113]);
      DisPosRolloSZ.update(sym[114], 0);
      DisST1RolloSZ.update(sym[116]);
      DisST2RolloSZ.update(sym[117]);
      CbSSrolloSZ.update(sym[118]);
      /* --------------------------- Rollo Kinderzimmer --------------------------- */
      iRolloKZ.update(sym[13]);
      DisPosRolloKZ.update(sym[13], 0);
      DisModeRolloKZ.update(sym[12]);
      DisST1RolloKZ.update(sym[122]);
      DisST2RolloKZ.update(sym[119]);
      CbSSrolloKZ.update(sym[120]);
      /* ------------------------------- Rollo Küche ------------------------------ */
      iRolloK.update(sym[15]);
      DisPosRolloK.update(sym[15], 0);
      DisModeRolloK.update(sym[14]);
      DisST1RolloK.update(sym[50]);
      DisST2RolloK.update(sym[51]);
      CbSSrolloK.update(sym[52]);
      /* ----------------------------- Rollo Balkontür ---------------------------- */
      //iRolloB.update(sym[22]);

    }