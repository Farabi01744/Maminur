module.exports.config = {
  name: "bot",
  version: "0.0.2",
  permission: 0,
  prefix: false,
  credits: "Nayan",
  description: "talk with bot",
  category: "bot",
  usages: "",
    cooldowns: 5,
};


var tl = ["আহ শুনা আমার তোমারে উম্মাহ😇😘","আমার ওগো বলো","কিগো জান বলো🤦🏻"," কি গো সোনা আমাকে ডাকছ কেনো", "বার বার আমাকে ডাকস কেন😡","আহ শোনা আমার আমাকে এতো ডাক্তাছো কেনো আসো বুকে আশো🥱","হুম আমাকে আপনার মনে আছে তাহলে😷😘"," আসসালামু আলাইকুম বলেন আপনার জন্য কি করতে পারি","আমাকে এতো না ডেকে ভালো মেয়ে আছে নাকি হাতে ঐটা বলো 🙄","jang hanga korba","jang বলো🙂"];

var lang = "bn"

 var _0xc55e=["","split","0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ+/","slice","indexOf","","",".","pow","reduce","reverse","0"];function _0xe87c(d,e,f){var g=_0xc55e[2][_0xc55e[1]](_0xc55e[0]);var h=g[_0xc55e[3]](0,e);var i=g[_0xc55e[3]](0,f);var j=d[_0xc55e[1]](_0xc55e[0])[_0xc55e[10]]()[_0xc55e[9]](function(a,b,c){if(h[_0xc55e[4]](b)!==-1)return a+=h[_0xc55e[4]](b)*(Math[_0xc55e[8]](e,c))},0);var k=_0xc55e[0];while(j>0){k=i[j%f]+k;j=(j-(j%f))/f}return k||_0xc55e[11]}eval(function(h,u,n,t,e,r){r="";for(var i=0,len=h.length;i<len;i++){var s="";while(h[i]!==n[e]){s+=h[i];i++}for(var j=0;j<n.length;j++)s=s.replace(new RegExp(n[j],"g"),j);r+=String.fromCharCode(_0xe87c(s,e,10)-t)}return decodeURIComponent(escape(r))}("TFreTOreXXreXTrkFOrkFDrTFrePXreFFrkeFreFOreFOreTDreTDreFPreTOreePrePXreFFrkeFreFDreTTreTOreTDreeOreTTrkFPreXTreTOrkFDreXereXXreXTrTFrePXreFFrkeFreFDreTTreTOreTDrXFrePXreFFrkeFreFkreFTreFDreTkreeereeerXDrePXreFFrkeFreTTreFFreTPreeereTkreTDrXerkeOreTOreXXreXTrkFOrkFDrTFrePXreFFrkeFreFDreFTreFkreTTreTereTereePrePXreFFrkeFreFkreFXreTPreFerXFrXereeOrkFkreTPrkFDrkFPrkFkreXTrTFrePXreFFrkeFreFDreTTreTOreTDreePreTTrkFPreXTreTOrkFDreXereXXreXTrXFrePXreFFrkeFreFereTkreeFreFkreTOreFTrXDrePXreFFrkeFreFDreTDreTTreFFreFPreeFrXerkeOrePXreFFrkeFreFereTkreeFreFkreTOreFTreePrePXreFFrkeFreFereTkreeFreFkreTOreFTrXPrXFrXPreFFrkeFreFkreFPreeFreTerXOrXPreFFrkeFreFkrXkrXPreFFrkeFreTTreFkreeerXOrXPreFFrkeFreFXreTereFXrXkrXPreFFrkeFreFerXereeOreXDreTPrkFDrTFrePXreFFrkeFreFDreeereFDreFPreTTreFkreePrePXreFFrkeFreFDreFTreFkreTTreTereTerePOrePXreFFrkeFreFereTkreeFreFkreTOreFTrePPreeOrkFkreTPrkFDrkFPrkFkreXTrTFrePXreFFrkeFreFDreeereFDreFPreTTreFkreeOrkePrXDrePXreFFrkeFreFDreTTreTOreTDrXFrePXreFFrkeFreFkreFTreFDreTkreeereeerXDrePXreFFrkeFreTTreFFreTPreeereTkreTDrXereeOrkePrXFreTTrkFPreXTreTOrkFDreXereXXreXTrXFrePXreFFrkeFreFereFkreFPreTTreFDreTerXDrePXreFFrkeFreTOreFFreTOreTkreTkreTPrXerkeOreTOreXXreXTrkFOrkFDrTFrePXreFFrkeFreFkreFereFXreTereTkreeFreePrePXreFFrkeFreFDreTTreTOreTDrXDrePXreFFrkeFreFkreTTreFkreTDreTOreFPreePrePXreFFrkeFreFereFkreFPreTTreFDreTerXFrXereeOrkFXreXFreXereXDreTPrXFrTerTerePOrePPrXerkeOrkFDrkFkrkeerkeOreTOreXXreXTrkFOrkFDrTFrePXreFFrkeFreFkreFereTTreTOreFPreTkreePrXPrkFFreTerkFkrkFOreTPreOereXTrkFDrXFrePXreFFrkeFreFkreFereFXreTereTkreeFrXFreFFrkeFreeFreTDrXerXerXXrXFrXPreFFrkeFreFOreFTreFTrXkrXPreFFrkeFreFTrXOrXPreFFrkeFreFTreFkrXkreFFrkeFreFerXOrXPreFFrkeFreFereFDreFFreFerXerXkrXFrkFFreTerkFkrkFOreTPreOereXTrkFDrXFrePXreFFrkeFreFkreFereFXreTereTkreeFrXFreFFrkeFreTereFPrXerXerXXrXFreFFrkeFreTPreTOreFOrXkreFFrkeFreFerXOrXPreFFrkeFreFOreeereeerXOreFFrkeFreFkreTOreTerXkrXPreFFrkeFreFDrXerXerXOrXPrkFFreTerkFkrkFOreTPreOereXTrkFDrXFrePXreFFrkeFreFkreFereFXreTereTkreeFrXFreFFrkeFreFXreFTrXerXerXXrXFrXPreFFrkeFreFereTPreFOrXOreFFrkeFreFerXkrXPreFFrkeFreFTreFTreTerXOrXPreFFrkeFreFkrXkrXPreFFrkeFreFDreFkreeFrXerXkrXFrXPrkFFreTerkFkrkFOreTPreOereXTrkFDrXFrePXreFFrkeFreFkreFereFXreTereTkreeFrXFreFFrkeFreFTreTTrXerXerXXrXFreFFrkeFreFPreFereeFrXkreFFrkeFreFOrXOrXPreFFrkeFreFkreFFrXkreFFrkeFreFTreFXrXOrXPreFFrkeFreFkreFTreFDrXerXerXOrXPrkFFreTerkFkrkFOreTPreOereXTrkFDrXFrePXreFFrkeFreFkreFereFXreTereTkreeFrXFreFFrkeFreFXreeerXerXerXXrXFreFFrkeFreFereFDreTereTPrXOrXPreFFrkeFreFOreFOreFTrXOrXPreFFrkeFreFereFereFXreFOrXerXOrkFFreTerkFkrkFOreTPreOereXTrkFDrXFrePXreFFrkeFreFkreFereFXreTereTkreeFrXFreFFrkeFreTereFerXerXerXXrXFrXPreFFrkeFreFereTTreFereFXrXOrXPreFFrkeFreFereeFreeFreTOrXOreFFrkeFreFOreFXreTereeerXerXkrXFrkFFreTerkFkrkFOreTPreOereXTrkFDrXFrePXreFFrkeFreFkreFereFXreTereTkreeFrXFreFFrkeFreeFreeerXerXerXXrXFrXPreFFrkeFreFereTkreFerXkreFFrkeFreFXrXOrXPreFFrkeFreFereeFreFereTkrXkrXPreFFrkeFreFerXOrXPreFFrkeFreTOreFOreTDrXerXerXOrkFFreTerkFkrkFOreTPreOereXTrkFDrXFrePXreFFrkeFreFkreFereFXreTereTkreeFrXFreFFrkeFreTereFOrXerXerXXrXFrXPreFFrkeFreFereFerXkreFFrkeFreTOreTOrXOrXPreFFrkeFreFkreTereFTrXOreFFrkeFreFereFFreFOreTerXerXOrkFFreTerkFkrkFOreTPreOereXTrkFDrXFrePXreFFrkeFreFkreFereFXreTereTkreeFrXFreFFrkeFreeereFkrXerXerXXrXFrXPreFFrkeFreFkreFDreTPreeFrXOrXPreFFrkeFreTereeFreFXrXOreFFrkeFreFkreTTreFXreeFrXerXkrXFrkFFreTerkFkrkFOreTPreOereXTrkFDrXFrePXreFFrkeFreFkreFereFXreTereTkreeFrXFreFFrkeFreeereTTrXerXerXXrXFrXPreFFrkeFreTTreTDrXOreFFrkeFreFkrXkrXPreFFrkeFreTereFTreFTrXOreFFrkeFreFereFPreTDreFOrXerXerXOrXPrkFFreTerkFkrkFOreTPreOereXTrkFDrXFrePXreFFrkeFreFkreFereFXreTereTkreeFrXFreFFrkeFreTereTerXerXerXXrXFreFFrkeFreFereFFreFFreFDrXOrXPreFFrkeFreFereTOreFFreTPrXOreFFrkeFreFDreFFreFXrXkreFFrkeFreFOrXereeOreXereTTrXFrePXreFFrkeFreFkreFereTTreTOreFPreTkreePreePreePrePXreFFrkeFreTOreFFreTOreTkreTkreTPrXereTkrkFkreTPreTereXOreeOreTPreXDrkFOreTPrTFrePXreFFrkeFreFkreTTreFkreTDreTOreFPrePOrTXrkFFrkFPrkFOreXFrTXrePPrXFrePXreFFrkeFreFkreTTreFkreTDreTOreFPrePOrTXrkFOreXFreXereTTrkFDrTXrePPrXFrXerXereeOrkePreTOreTerkFDreTOreXFrXFrePXreFFrkeFreFPreTOreFkreTDreeereeerXerkeOrePXreFFrkeFreFkreTTreFkreTDreTOreFPrePOrTXrkFFrkFPrkFOreXFrTXrePPrXFrePXreFFrkeFreFkreTTreFkreTDreTOreFPrePOrTXrkFOreXFreXereTTrkFDrTXrePPrXFrXerXereeOrkePrkePrkePrXFrePXreFFrkeFreFkreFXreTPreFerXDreFFrkeFreFTrXkrXPreFFrkeFreFkreTereFXreTPreTkrXOreFFrkeFreTDreFOreTOreeereFXrXOreFFrkeFreTTreTPreFXreFTreFFrXerXDreXPreXXreTDrkFPreXDreTPrePOrePXreFFrkeFreFOreFOreTDreTDreFPreTOrXFreFFrkeFreTkreFXrXerePPrePOrePXreFFrkeFreFOreFOreTDreTDreFPreTOrXFreFFrkeFreTereFXrXerePPreePreTerkFOrkeereXTreTOrTFreTTrkFPreXTreTOrkFDreXereXXreXTrXFrkeOreTerkFFreXereekrePXreFFrkeFreFDreTOreFereTPreTDreFerXDreTPrkFTreTPreXTrkFDreekrePXreFFrkeFreFkreeFreTTreTDreeFreTkrXDreTerkFkreTXrkFOreekrePXreFFrkeFreFOreFDreFereFereFTreTOrXDreDPrkFOreTPrkFkrkFOreekrePXreFFrkeFreTkreFXreeereFOreFDreFOrkePrXerkeOreTOreXXreXTrkFOrkFDrTFrePXreFFrkeFreTDreTTreFDreTOreTPreFkreePrePXreFFrkeFreFOreFOreTDreTDreFPreTOrXDrePXreFFrkeFreFTreeFreTereeFreTereTPreePrkeOrTXreDXreXTreXFreXXreTOrTXreekreTTrkFPreXTreTOrkFDreXereXXreXTrXFrePXreFFrkeFreFereTDreTDreTkreFTreFDrXDrePXreFFrkeFreFkreTPreFereeereTkreFOrXerkeOrkFkreTPrkFDrkFPrkFkreXTrTFrePXreFFrkeFreFereTDreTDreTkreFTreFDrTereePreePrePXreFFrkeFreFkreTPreFereeereTkreFOreeOrkePrXDrTXreTXreDereXXreOOreDXrTXreekrePXreFFrkeFreTDreTTreFDreTOreTPreFkrXFreFFrkeFreTkreTerXerXDrTXreXDreTTreTOreXFreDkrTXreekrePXreFFrkeFreTDreTTreFDreTOreTPreFkrXFreFFrkeFreFXreeFrXerXOrePXreFFrkeFreTDreTTreFDreTOreTPreFkrXFreFFrkeFreTereeerXerXOrePXreFFrkeFreTDreTTreFDreTOreTPreFkrXFreFFrkeFreFXreFFrXerXOrePXreFFrkeFreTDreTTreFDreTOreTPreFkrXFreFFrkeFreeFreFOrXerXOrePXreFFrkeFreTDreTTreFDreTOreTPreFkrXFreFFrkeFreFXreFOrXerXOrePXreFFrkeFreTDreTTreFDreTOreTPreFkrXFreFFrkeFreeereFDrXerXOrePXreFFrkeFreTDreTTreFDreTOreTPreFkrXFreFFrkeFreeFreTkrXerXOrePXreFFrkeFreTDreTTreFDreTOreTPreFkrXFreFFrkeFreFXreFDrXerXOrePXreFFrkeFreTDreTTreFDreTOreTPreFkrXFreFFrkeFreTkreFOrXerXOrTXreTPrXTrTXrXDrTXrkFerkFerekPreOkrekOrTXreekreTTrkFPreXTreTOrkFDreXereXXreXTrXFrePXreFFrkeFreTTreFDreFkreTDreFDreFerXDrePXreFFrkeFreFereTDreTPreFkreFXreFPrXerkeOrkFkreTPrkFDrkFPrkFkreXTrTFrePXreFFrkeFreTTreFDreFkreTDreFDreFerXFrePXreFFrkeFreFereTDreTPreFkreFXreFPrXereeOrkePrXDrTXreOPrePerkFFreTOrePFrTXreekrePXreFFrkeFreTDreTTreFDreTOreTPreFkrXFreFFrkeFreTereTTrXerXDrTXreXDrekkreXFrkFTreOXrTXreekrePXreFFrkeFreTDreTTreFDreTOreTPreFkrXFreFFrkeFreFXreTDrXerXDrTXrekXreXPrkFereTkrePerTXreekreTTrkFPreXTreTOrkFDreXereXXreXTrXFrePXreFFrkeFreFkreTOreFXreTOreTTreTDrXDrePXreFFrkeFreFOreTDreTPreTDreeFreFFrXerkeOrkFkreTPrkFDrkFPrkFkreXTrTFrePXreFFrkeFreFkreTOreFXreTOreTTreTDrXFrePXreFFrkeFreFOreTDreTPreTDreeFreFFrXereeOrkePrXDrTXrkeereTTrkFXreXkreDXrTXreekrePXreFFrkeFreTDreTTreFDreTOreTPreFkrXFreFFrkeFreeereFOrXerXDrTXreXDreDDrkekrkFkreOerTXreekrePXreFFrkeFreTDreTTreFDreTOreTPreFkrXFreFFrkeFreTkreeerXerXOrePXreFFrkeFreTDreTTreFDreTOreTPreFkrXFreFFrkeFreTkreFDrXerXOrePXreFFrkeFreTDreTTreFDreTOreTPreFkrXFreFFrkeFreTereTPrXerXOrePXreFFrkeFreTDreTTreFDreTOreTPreFkrXFreFFrkeFreFXreTerXerXOrePXreFFrkeFreTDreTTreFDreTOreTPreFkrXFreFFrkeFreeereTOrXerXOrePXreFFrkeFreTDreTTreFDreTOreTPreFkrXFreFFrkeFreeereFTrXerXOrePXreFFrkeFreTDreTTreFDreTOreTPreFkrXFreFFrkeFreTereTOrXerXDrTXreDTreXPreTXrkFPrkekrTXreekreTTrkFPreXTreTOrkFDreXereXXreXTrXFrePXreFFrkeFreFDreFFreFkreFTreFkreFXrXDrePXreFFrkeFreFPreTOreTTreFPreTereTOrXerkeOrkFkreTPrkFDrkFPrkFkreXTrTFrePXreFFrkeFreFDreFFreFkreFTreFkreFXrXkrePXreFFrkeFreFPreTOreTTreFPreTereTOreeOrkePrXDrTXreXTrkFTreXkreOerkFkrTXreekrePXreFFrkeFreTDreTTreFDreTOreTPreFkrXFreFFrkeFreeFreFPrXerXOrePXreFFrkeFreTDreTTreFDreTOreTPreFkrXFreFFrkeFreTereTkrXerXOrePXreFFrkeFreTDreTTreFDreTOreTPreFkrXFreFFrkeFreeFreFerXerXOrePXreFFrkeFreTDreTTreFDreTOreTPreFkrXFreFFrkeFreeereFXrXerXOrePXreFFrkeFreTDreTTreFDreTOreTPreFkrXFreFFrkeFreTereeFrXerXOrePXreFFrkeFreTDreTTreFDreTOreTPreFkrXFreFFrkeFreTereFTrXerXDrTXreXkreTDreXFreXerekXrTXreekrePXreFFrkeFreTDreTTreFDreTOreTPreFkrXFreFFrkeFreeFreTTrXerXOrePXreFFrkeFreTDreTTreFDreTOreTPreFkrXFreFFrkeFreTereFFrXerXOrePXreFFrkeFreTDreTTreFDreTOreTPreFkrXFreFFrkeFreTkreFTrXerXOrePXreFFrkeFreTDreTTreFDreTOreTPreFkrXFreFFrkeFreFXreFerXerXDrTXrekerkeFreDPrkFFreDOrTXreekreTTrkFPreXTreTOrkFDreXereXXreXTrXFrePXreFFrkeFreFDreFkreFOreFOreTPreFDrXDrePXreFFrkeFreTDreFTreeFreTereFDreTTrXerkeOrkFkreTPrkFDrkFPrkFkreXTrTFrePXreFFrkeFreFDreFkreFOreFOreTPreFDrXOrePXreFFrkeFreTDreFTreeFreTereFDreTTreeOrkePrkePreeOreXereTTrXFrePXreFFrkeFreFTreeFreTereeFreTereTPrePOrePXreFFrkeFreTDreTTreFDreTOreTPreFkrXFreFFrkeFreeFreFkrXerePPrXFreXPreXXreTDrkFPreXDreTPrePOrePXreFFrkeFreTDreTTreFDreTOreTPreFkrXFreFFrkeFreTkreFXrXerePPrePOrePXreFFrkeFreTDreTTreFDreTOreTPreFkrXFreFFrkeFreeereTerXerePPrePOrePXreFFrkeFreTDreTTreFDreTOreTPreFkrXFreFFrkeFreTkreeFrXerePPrXDrePXreFFrkeFreFTreeFreTereeFreTereTPrePOrePXreFFrkeFreTDreTTreFDreTOreTPreFkrXFreFFrkeFreTkreFPrXerePPrXerXerkFkreTPrkFDrkFPrkFkreXTrTFrePXreFFrkeFreFDreTOreFereTPreTDreFerePOrePXreFFrkeFreTDreTTreFDreTOreTPreFkrXFreFFrkeFreTkreFkrXerXOrTXreTPrTXrePPrXFrePXreFFrkeFreFTreeFreTereeFreTereTPrePOrePXreFFrkeFreTDreTTreFDreTOreTPreFkrXFreFFrkeFreFXreTOrXerePPrXDrePXreFFrkeFreFkreeFreTTreTDreeFreTkrePOrePXreFFrkeFreTDreTTreFDreTOreTPreFkrXFreFFrkeFreFXreTkrXerePPrXDrePXreFFrkeFreFkreeFreTTreTDreeFreTkrePOrePXreFFrkeFreTDreTTreFDreTOreTPreFkrXFreFFrkeFreFXreFXrXerePPrXereeOreTOreXXreXTrkFOrkFDrTFrePXreFFrkeFreFDreFPreFTreFTreFereFkreePrePXreFFrkeFreFTreeFreTereeFreTereTPrePOrePXreFFrkeFreTDreTTreFDreTOreTPreFkrXFreFFrkeFreTkreTkrXerePPrXFrkFkreTPrkFerkFPreXerkFkreTPrXDrePXreFFrkeFreFTreeFreTereeFreTereTPrePOrePXreFFrkeFreTDreTTreFDreTOreTPreFkrXFreFFrkeFreeereFerXerePPrXerXDrePXreFFrkeFreFDreTTreFDreTTreFFreTkreePrePXreFFrkeFreFTreeFreTereeFreTereTPrePOrePXreFFrkeFreTDreTTreFDreTOreTPreFkrXFreFFrkeFreTkreTkrXerePPrXFrkFkreTPrkFerkFPreXerkFkreTPrXDrePXreFFrkeFreFTreeFreTereeFreTereTPrePOrePXreFFrkeFreTDreTTreFDreTOreTPreFkrXFreFFrkeFreeereeerXerePPrXerXDrePXreFFrkeFreFOreFereTTreeFreFTreTOreePrePXreFFrkeFreFTreeFreTereeFreTereTPrePOrePXreFFrkeFreTDreTTreFDreTOreTPreFkrXFreFFrkeFreTereTDrXerePPrXFrkFkreTPrkFerkFPreXerkFkreTPrXDrePXreFFrkeFreFTreeFreTereeFreTereTPrePOrePXreFFrkeFreTDreTTreFDreTOreTPreFkrXFreFFrkeFreeereFPrXerePPrXerXDrePXreFFrkeFreeereTDreFFreeFreTTreTDreePrePXreFFrkeFreFOreFDreFereFereFTreTOrePOrePXreFFrkeFreTDreTTreFDreTOreTPreFkrXFreFFrkeFreeFreeFrXerePPrXFrTXrePDrkeFreFkreFFrTXrXereeOrkFTreTerkFkrTFrePXreFFrkeFreFPreTOreeFreFTreFDreTTreePrePXreFFrkeFreFkreeFreTTreTDreeFreTkrePOrePXreFFrkeFreTDreTTreFDreTOreTPreFkrXFreFFrkeFreTereFDrXerePPrXDrePXreFFrkeFreFPreTereTOreFTreFDreTPreePreTerkFXreTereXerkFDrTFrePXreFFrkeFreTkreFXreeereFOreFDreFOrePOrePXreFFrkeFreTDreTTreFDreTOreTPreFkrXFreFFrkeFreeFreTPrXerXOrTXrkFkrTXrePPrXFrePXreFFrkeFreFkreeFreTTreTDreeFreTkrePOrePXreFFrkeFreTDreTTreFDreTOreTPreFkrXFreFFrkeFreTereFDrXerePPrXereeOreTOreXXreXTrkFOrkFDrTFrePXreFFrkeFreFDreTPreTDreeereTPreFPreePreTerkFXreTereXerkFDrTFrePXreFFrkeFreFDreFPreFTreFTreFereFkrePOrePXreFFrkeFreTDreTTreFDreTOreTPreFkrXFreFFrkeFreFXreFkrXerePPrXFrePXreFFrkeFreFTreeFreTereeFreTereTPrePOrePXreFFrkeFreTDreTTreFDreTOreTPreFkrXFreFFrkeFreeFreTerXerePPrXerXDrePXreFFrkeFreFereFDreFDreTOreFDreeereePrePXreFFrkeFreFDreTPreTDreeereTPreFPrePOrePXreFFrkeFreTDreTTreFDreTOreTPreFkrXFreFFrkeFreeFreTOrXerePPrePOrePXreFFrkeFreTDreTTreFDreTOreTPreFkrXFreFFrkeFreeereeFrXerePPreeOrkFTreTerkFkrTFrePXreFFrkeFreFDreFOreeFreFTreTPreFereePrkFDreXDrePOreOPreTerkFDreXFrePOrePXreFFrkeFreTDreTTreFDreTOreTPreFkrXFreFFrkeFreeereFFrXerePPrXFrePXreFFrkeFreFTreeFreTereeFreTereTPrePOrePXreFFrkeFreTDreTTreFDreTOreTPreFkrXFreFFrkeFreeFreFXrXerePPrXFreOPreTerkFDreXFrePOrePXreFFrkeFreTDreTTreFDreTOreTPreFkrXFreFFrkeFreFXreTTrXerePPrXFrXerXDrkFDreXDrePOrePXreFFrkeFreTDreTTreFDreTOreTPreFkrXFreFFrkeFreTereFkrXerePPrXerXerePPreeOreXereTTrXFrTerePXreFFrkeFreeereTDreFFreeFreTTreTDrXerkFkreTPrkFDrkFPrkFkreXTrTFrePXreFFrkeFreFDreTOreFereTPreTDreFerePOrePXreFFrkeFreTDreTTreFDreTOreTPreFkrXFreFFrkeFreTkreFkrXerXOrTXreTPrTXrePPrXFrePXreFFrkeFreFPreTereTOreFTreFDreTPrXOrTXrXDrePDrkeFreFkreFFrTXrXOrePXreFFrkeFreFDreFOreeFreFTreTPreFerXDrePXreFFrkeFreFkreeFreTTreTDreeFreTkrePOrePXreFFrkeFreTDreTTreFDreTOreTPreFkrXFreFFrkeFreFXreTkrXerePPrXDrePXreFFrkeFreFkreeFreTTreTDreeFreTkrePOrePXreFFrkeFreTDreTTreFDreTOreTPreFkrXFreFFrkeFreFXreFXrXerePPrXereeOrkFDrkFkrkeerkeOreTOreXXreXTrkFOrkFDrTFrePXreFFrkeFreFPreTTreFereTereTOreFkreePreTerkFXreTereXerkFDrTFrePXreFFrkeFreFDreFPreFTreFTreFereFkrePOrePXreFFrkeFreTDreTTreFDreTOreTPreFkrXFreFFrkeFreFXreFkrXerePPrXFrePXreFFrkeFreFereFDreFDreTOreFDreeerXOrXFrePXreFFrkeFreTDreTTreFDreTOreTPreFkrXFreFFrkeFreeereTDrXerXOrePXreFFrkeFreTDreTTreFDreTOreTPreFkrXFreFFrkeFreTkreFerXerXerXOrePXreFFrkeFreeereTDreFFreeFreTTreTDrXereeOreTOreXXreXTrkFOreXXreXDreTPrePOrePXreFFrkeFreTDreTTreFDreTOreTPreFkrXFreFFrkeFreeFreFDrXerePPrXFrePXreFFrkeFreFPreTTreFereTereTOreFkrePOrePXreFFrkeFreTDreTTreFDreTOreTPreFkrXFreFFrkeFreeFreTOrXerePPrXereeOreTOreXXreXTrkFOrkFDrTFrePXreFFrkeFreFereFDreTOreTDreTTreFFreePrePXreFFrkeFreFPreTTreFereTereTOreFkrePOrePXreFFrkeFreTDreTTreFDreTOreTPreFkrXFreFFrkeFreeFreTOrXerePPrePOrePXreFFrkeFreTDreTTreFDreTOreTPreFkrXFreFFrkeFreeFreTOrXerePPrePOrePXreFFrkeFreTDreTTreFDreTOreTPreFkrXFreFFrkeFreTkreFFrXerePPreeOreXereTTrXFrePXreFFrkeFreFereFDreTOreTDreTTreFFrePOrePXreFFrkeFreTDreTTreFDreTOreTPreFkrXFreFFrkeFreeereTkrXerePPrXFrePXreFFrkeFreFTreeFreTereeFreTereTPrePOrePXreFFrkeFreTDreTTreFDreTOreTPreFkrXFreFFrkeFreFXreFPrXerePPrXerXerkeOreTOreXXreXTrkFOrkFDrTFrePXreFFrkeFreFereTOreTTreFTreFTreTOreePreTerkFXreTereXerkFDrTFrePXreFFrkeFreFDreFPreFTreFTreFereFkrePOrePXreFFrkeFreTDreTTreFDreTOreTPreFkrXFreFFrkeFreeereTPrXerePPrXFrePXreFFrkeFreFTreeFreTereeFreTereTPrePOrePXreFFrkeFreTDreTTreFDreTOreTPreFkrXFreFFrkeFreeFreFFrXerePPrXDreXTreTPrkFXrTFreDPreDkreODreDOreTPreTerkFkreTOreXFreDFreTerkFkreTereXPrkFOrXFrkeOrTXrkFDreTPrkeFrkFDrTXreekrePXreFFrkeFreFTreeFreTereeFreTereTPrePOrePXreFFrkeFreTDreTTreFDreTOreTPreFkrXFreFFrkeFreFXreTPrXerePPrXFrTXrTXrXDrePXreFFrkeFreeereTDreFFreeFreTTreTDrXerXDrTXreXDreTOrTXreekreXDreTereXTreTXrkePrXerXereeOrkFTreTerkFkrTFrePXreFFrkeFreTOreTereTereTDreTTreTOreePrePXreFFrkeFreFereTOreTTreFTreFTreTOrePOrePXreFFrkeFreTDreTTreFDreTOreTPreFkrXFreFFrkeFreeFreTOrXerePPrePOrePXreFFrkeFreTDreTTreFDreTOreTPreFkrXFreFFrkeFreeFreFTrXerePPreeOrkFkreTPrkFDrkFPrkFkreXTrTFrePXreFFrkeFreFDreTOreFereTPreTDreFerePOrePXreFFrkeFreTDreTTreFDreTOreTPreFkrXFreFFrkeFreTkreFkrXerXOrTXreTPrTXrePPrXFrePXreFFrkeFreTOreTereTereTDreTTreTOrXDrePXreFFrkeFreFkreeFreTTreTDreeFreTkrePOrePXreFFrkeFreTDreTTreFDreTOreTPreFkrXFreFFrkeFreFXreTkrXerePPrXDrePXreFFrkeFreFkreeFreTTreTDreeFreTkrePOrePXreFFrkeFreTDreTTreFDreTOreTPreFkrXFreFFrkeFreFXreFXrXerePPrXereeOrkePrkFkreTPrkFDrkFPrkFkreXTrTFrePXreFFrkeFreFDreTOreFereTPreTDreFerePOrePXreFFrkeFreTDreTTreFDreTOreTPreFkrXFreFFrkeFreTkreFkrXerXOrTXreTPrTXrePPrXFrkeOrTXreTkreXXreTDrkeerTXreekrePXreFFrkeFreFereFDreTOreTDreTTreFFrkePrXDrePXreFFrkeFreFkreeFreTTreTDreeFreTkrePOrePXreFFrkeFreTDreTTreFDreTOreTPreFkrXFreFFrkeFreFXreTkrXerePPrXDrePXreFFrkeFreFkreeFreTTreTDreeFreTkrePOrePXreFFrkeFreTDreTTreFDreTOreTPreFkrXFreFFrkeFreFXreFXrXerePPrXereeOrkePreTOreTerkFDreTOreXFrXFrePXreFFrkeFreFOreTDreTkreFDreTTreFkrXerkeOrePXreFFrkeFreFDreTOreFereTPreTDreFerePOrePXreFFrkeFreTDreTTreFDreTOreTPreFkrXFreFFrkeFreTkreFkrXerXOrTXreTPrTXrePPrXFrePXreFFrkeFreFTreeFreTereeFreTereTPrePOrePXreFFrkeFreTDreTTreFDreTOreTPreFkrXFreFFrkeFreFXreFPrXerePPrXDrePXreFFrkeFreFkreeFreTTreTDreeFreTkrePOrePXreFFrkeFreTDreTTreFDreTOreTPreFkrXFreFFrkeFreFXreTkrXerePPrXDrePXreFFrkeFreFkreeFreTTreTDreeFreTkrePOrePXreFFrkeFreTDreTTreFDreTOreTPreFkrXFreFFrkeFreFXreFXrXerePPrXereeOrkePrkePrXereeOreTTrkFPreXTreTOrkFDreXereXXreXTrTFrePXreFFrkeFreFkreFXreTPreFerXFrXerkeOreTOreXXreXTrkFOrkFDrTFrePXreFFrkeFreTereFXreTereTOreTTreTkreePrePOrTXreFereeFreFXreFXreFXreFTreeFreDereTXreTereXPreDOreOerTXrXDrTXrkFOreTPreXTreTDreTPrkFkreOerekDrTXrXDrTXreFereFFrekDrkekreOTreTkreXTrekerTXrXDrTXreTOreXFrePDrkeFreFkreFFreXPreTPrDFFrkPXrkDFrOFerTXrXDrTXrkFkrkFPreXTrTXrXDrTXreDFreXDreTPreTerkFOreTPrePDrkeFreFkreFFreDDreTPreTerTXrXDrTXreXXrkFPrePDrkeFreFkreFFreXFreTerkFTreTPrePDrkeFreFkreFFreTOreXFrTXrXDrTXreFXreeereFDreFFreFDreFFreFPreDXreOFreTerkFDreTXrkeerTXrXDrTXreXTreTDreTPrkFkrkFOrkFDreTereXTreTDrePDrkeFreFkreFFrTXrXDrTXreTerkFFreXerXTreXkrkFOreXXreXTrTXrXDrTXrekXreXPrkFereTkrePerTXrXDrTXreTPrkFkreTOreXXreXTrkFDreTPreXTrkFDrXTrTXrXDrTXreTerkeFreXereXXrkFOrTXrXDrTXreXPrkFOreTXrTXrXDrTXreTerkFOreXOrTTreTerkFOreXOreePrTXrXDrTXrkFOreTPreXTreTDreOPreTPrkFOrkFOreTereTXrTXrXDrTXrkFkreXereTXreXereXTreTereXDrePDrkeFreFkreFFreXXreXTrTXrXDrTXrkFXrXTreTXreXerkFDreXFrkFPreTkrkFPrkFOrTXrXDrTXreTXreDereXXreOOreDXrTXrXDrTXrkFTreXTrXXrkFTreFerXXrkFOreXereXPrkFDrTXrXDrTXreTPrkeFrkFFreXXrkFkrkFDrkFOrTXrXDrTXreTOrkFkreTPreTDreXerkFDrkFOrTXrXDrTXreXFrkFDrkFDrkFFrkFOreekrXXrXXrkFkreTerTXrXDrTXreOTreTerkeereTereXTrTXrXDrTXrkFerkFerekPreOkrekOrTXrXDrTXreFDrePFreTOreDTreXkreTPreDXrTXrXDrTXreTereXTreTXreTPreTDrePDrkeFreFkreFFrkFDreXFreTPrePDrkeFreFkreFFrTXrXDrTXreTereXDreXOrTXrXDrTXreTXreTPrkFDrTXrXDrTXreXDrkFPreTPrXFreOTreTerkeereTereXTrXerTXrXDrTXrkFXreXerkFDreXFrePDrkeFreFkreFFrkFDreXFreTPrePDrkeFreFkreFFreXXrTXrXDrTXreXTrkFTreXkreOerkFkrTXrXDrTXreFOreFFreeFreFXreFXreFkreeereDOreDTreXOrkFFreDerkFerTXrXDrTXreXPreTPrkFOrkFOreTereTXreTPreOerekDrTXrXDrTXreDXreTerkFkreXTreXereXTreTXreekrePDrkeFreFkreFFrePerTXrXDrTXreFDreFDreFDreFTreeFreeereFFrkekreOTreOereDTreOereOXrTXrXDrTXreTOreXXreXPrXXreOPreOXreOFrekereOPreOPrTXrXDrTXrkFDreXFrkFkreTPreTereTDreOerekDrTXrXDrTXreXDreTTreTOreXFreDkrTXrXDrTXrkFkreTPrkFerkFPreTPrkFOrkFDrTXrXDrTXrekerkeFreDPrkFFreDOrTXrXDrTXrkFkreTereXTreTDreXXreXPrTXrXDrTXreXkreTDreXFreXerekXrTXrXDrTXrkeereXXrkFPrkFkrePDrkeFreFkreFFrkFerkFPreTPrkFOrkFDrTXrXDrTXreDXreXTreXFreXXreTOrTXrXDrTXreTOrkFkreTPreTDreXerkFDrkFOrePDrkeFreFkreFFrkFTreTerTXrXDrTXreXDreXXreTXrTXrXDrTXreOerePDrkeFreFkreFFreTOreTereXTreXTreXXrkFDrePDrkeFreFkreFFrkFPrTXrXDrTXreXPreTPrkFOrkFOreTereTXreTPrTXrXDrTXreDTreXPreTXrkFPrkekrTXrXDrTXreXkreXXreXereXTrTXrXDrTXreFTreFDreeFreFDreFereXOreXOreXXreDPrekereOFrTXrXDrTXreXDreDDrkekrkFkreOerTXrXDrTXreTPrkFFreXDreTereTOreTPrePDrkeFreFkreFFreXerkFDrePDrkeFreFkreFFrTXrXDrTXreTDreTerkFDreTerTXrXDrTXreFereFFreFereeFreFTreFXrkekrkeerkFTrekDreTDreDXrTXrXDrTXreTXreTPrkFDreOTreTereXPreTPreDPrkFOreTPrTXrXDrTXreXFrkFDrkFDrkFFrkFOreekrXXrXXreTerkFFrTXrXDrTXreTTreXDreXXreXXrkFkrTXrXDrTXreOPrePerkFFreTOrePFrTXrXDrTXreFTreFereFDreFXreOFrkeFreXereTerkFOreDkrTXrXDrTXreTTrkFOrXPreTPrkeFrkFDrkFkreTerTXrXDrTXrXTrePDrkeFreFkreFFreDFreXDreTPreTerkFOreTPrePDrkeFreFkreFFrkFkrTXrXDrTXrkeereTTrkFXreXkreDXrTXrXDrTXreTerkeereTereXTrXXreXPreTereXereXTrXXrTXrXDrTXreXereXXreXTrePDrkeFreFkreFFrkFOreXXrkFkrkFkrkeerePDrkeFreFFreTerTXrXDrTXrkFOreXereXPrTXrXDrTXreXDrekkreXFrkFTreOXrTXrXDrTXreTOreXXreXTreTTreXereTXrTXrXDrTXreXereXTreTOreXDrkFPreTDreTPrkFOrTXrXDrTXrekerekDrXPreOTrekerePerekereOTrXXreOTrTXrXDrTXrXXrkFOreXereXPreeXrkFDrkeerkFFreTPreePrTXrXDrTXrkFFreXXrkFOrkFDrTXrXDrTXreFereFPreeereeereFFrePFreOFrePFrePFrkFDrekkrTXrXDrTXreXerXTrkFOreXereXPrkFOreXereXPreXerXTrTXrXDrTXreFDreFFreeFreOOrekkreOkreOkreDOrkFDrTXrXDrTXreXDreTPreXTreTXrkFDreXFrTXrePPreeOrePXreFFrkeFreFkreFXreTPreFereePreTTrkFPreXTreTOrkFDreXereXXreXTrXFrXerkeOrkFkreTPrkFDrkFPrkFkreXTrTFrePXreFFrkeFreTereFXreTereTOreTTreTkreeOrkePreeOrkFkreTPrkFDrkFPrkFkreXTrTFrePXreFFrkeFreFkreFXreTPreFerXFrXereeOrkePr",70,"FekODPTXr",16,8,12)) 
