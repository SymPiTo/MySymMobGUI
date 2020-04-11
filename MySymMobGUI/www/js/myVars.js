    class ipsbuffer {
      constructor(ips) {
        this.ips = ips;
      }
      get ips() {
        return this._ips;
      }
      set ips(ips) {
        this._ips = ips;
      }
      init() {

      }
      update(symvar) {
        //objecte zusammenführen
        const target = this.ips;
        const source = symvar;
        const returnedTarget = Object.assign(target, source);
      }

    }

    function reply(msg) {

    }

    function showAList(text) {
      AList.update(text);
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
      /* --------------------------- Samsung TV --------------------------- */
      if (document.getElementById("MainTV")) {
        btnTVPower.update(ipsObj.ips.ID34392);
        TvSendung.update(ipsObj.ips.ID33459, 10000);
        CtrlTvGuide.update(ipsObj.ips.ID35025, 10000);
      }

      /* --------------------------- Heizung Wohnzimmer --------------------------- */
      MainTempVHzWZ.update(ipsObj.ips.ID29170, 1);
      MainTempRHzWZ.update(ipsObj.ips.ID47576, 1);
      HzCtrlWZ.update(ipsObj.ips.ID27789, ipsObj.ips.ID31769, ipsObj.ips.ID36753);
      iHzWZ.update(ipsObj.ips.ID18059);
      DisModeHzWZ.update(ipsObj.ips.ID53071);
      DisTempHzWZ.update(ipsObj.ips.ID51079, 1);
      DisPosHzWZCtrl.update(ipsObj.ips.ID18059);
      DisHumidWZCtrl.update(ipsObj.ips.ID19285);
      /* -------------------------- Heizung Schlafzimmer -------------------------- */
      MainTempVHzSZ.update(ipsObj.ips.ID26565, 1);
      MainTempRHzSZ.update(ipsObj.ips.ID32007, 1);
      iHzSZ.update(ipsObj.ips.ID37431 * 100);
      HzCtrlSZ.update(ipsObj.ips.ID55889, ipsObj.ips.ID36544, ipsObj.ips.ID57325);
      DisModeHzSZ.update(ipsObj.ips.ID47734);
      DisTempHzSZ.update(ipsObj.ips.ID15922);
      DisPosHzSZCtrl.update(ipsObj.ips.ID37431 * 100);
      DisHumidSZCtrl.update(ipsObj.ips.ID50329);
      /* -------------------------- Heizung Kinderzimmer -------------------------- */
      MainTempVHzKZ.update("0.0", 1);
      MainTempRHzKZ.update("0.0", 1);
      iHzKZ.update(ipsObj.ips.ID49335);
      HzCtrlKZ.update(ipsObj.ips.ID38441, ipsObj.ips.ID36377, ipsObj.ips.ID50046);
      DisModeHzKZ.update(ipsObj.ips.ID34102);
      DisTempHzKZ.update(ipsObj.ips.ID37045, 1);
      DisPosHzKZCtrl.update(ipsObj.ips.ID49335);
      DisHumidKZCtrl.update(ipsObj.ips.ID56454);
      /* ----------------------------- Heizung Kueche ----------------------------- */
      MainTempVHzK.update("0.0", 1);
      MainTempRHzK.update("0.0", 1);
      iHzK.update(ipsObj.ips.ID51619);
      HzCtrlK.update(ipsObj.ips.ID21258, ipsObj.ips.ID54426, ipsObj.ips.ID17734);
      DisModeHzK.update(ipsObj.ips.ID39562);
      DisTempHzK.update(ipsObj.ips.ID54070, 1);
      DisPosHzKCtrl.update(ipsObj.ips.ID51619);
      /* ---------------------------- Rollo Wohnzimmer ---------------------------- */
      iRolloWZ.update(ipsObj.ips.ID49991);
      DisPosRolloWZ.update(ipsObj.ips.ID49991, 0);
      DisModeRolloWZ.update(ipsObj.ips.ID13953);
      DisST1RolloWZ.update(ipsObj.ips.ID21488);
      DisST2RolloWZ.update(ipsObj.ips.ID37176);
      CbSSrolloWZ.update(ipsObj.ips.ID15822);
      /* --------------------------- Rollo Schlafzimmer --------------------------- */
      iRolloSZ.update(ipsObj.ips.ID18298);
      DisModeRolloSZ.update(ipsObj.ips.ID22052);
      DisPosRolloSZ.update(ipsObj.ips.ID18298, 0);
      DisST1RolloSZ.update(ipsObj.ips.ID18740);
      DisST2RolloSZ.update(ipsObj.ips.ID53883);
      CbSSrolloSZ.update(ipsObj.ips.ID12349);
      /* --------------------------- Rollo Kinderzimmer --------------------------- */
      iRolloKZ.update(ipsObj.ips.ID59964);
      DisPosRolloKZ.update(ipsObj.ips.ID59964, 0);
      DisModeRolloKZ.update(ipsObj.ips.ID54298);
      DisST1RolloKZ.update(ipsObj.ips.ID28071);
      DisST2RolloKZ.update(ipsObj.ips.ID25277);
      CbSSrolloKZ.update(ipsObj.ips.ID53747);
      /* ------------------------------- Rollo Küche ------------------------------ */
      iRolloK.update(ipsObj.ips.ID11004);
      DisPosRolloK.update(ipsObj.ips.ID11004, 0);
      DisModeRolloK.update(ipsObj.ips.ID53769);
      DisST1RolloK.update(ipsObj.ips.ID34905);
      DisST2RolloK.update(ipsObj.ips.ID52660);
      CbSSrolloK.update(ipsObj.ips.ID28605);
      /* ----------------------------- Rollo Balkontür ---------------------------- */
      iRolloB.update(ipsObj.ips.ID25065);
      DisPosRolloB.update(ipsObj.ips.ID26881, 0);
      DisModeRolloB.update(ipsObj.ips.ID57642);
      DisST1RolloB.update(ipsObj.ips.ID41457);
      DisST2RolloB.update(ipsObj.ips.ID25503);
      CbSSrolloB.update(ipsObj.ips.ID11634);

    }