import React, { useState, useEffect, useRef } from 'react';
import ImagePlaceholder from '../assets/image_loading.png'
import BrandLogo from '../assets/brand_logo.png'

const images = [
  {url:'https://res.cloudinary.com/dmat13pbd/image/upload/v1726575037/Home_1_ik9dkp.png',name:"Welcome"},
  {url:'https://res.cloudinary.com/dmat13pbd/image/upload/v1724867528/presentation_images/aachbyd6pbdkldaofnlf.jpg',name:"zolovid" ,id:1},
  {url:'https://res.cloudinary.com/dmat13pbd/image/upload/v1725625549/UDOVID-300_rez154.jpg',name:"UDOVID-300",id:2},
  {url:'https://res.cloudinary.com/dmat13pbd/image/upload/v1724866686/presentation_images/s2j5akvnmot2zdfhcuri.jpg',name:"proxim-cv",id:3},
  {url:'https://res.cloudinary.com/dmat13pbd/image/upload/v1724867533/presentation_images/f6jgygszmfyptfeazkhk.jpg',name:"pinmox-cv 625",id:4},
  {url:'https://res.cloudinary.com/dmat13pbd/image/upload/v1725625751/DROP_RANGE_jahm3z.jpg',name:"drop range",id:5},
  {url:'https://res.cloudinary.com/dmat13pbd/image/upload/v1724867528/presentation_images/ngm01r9txbkb8w1agul6.jpg',name:"cepovid-cv" ,id:6},
  {url:'https://res.cloudinary.com/dmat13pbd/image/upload/v1724867532/presentation_images/godhhhdadxbvqytkx4am.jpg',name:"cefugen",id:7},
  {url:'https://res.cloudinary.com/dmat13pbd/image/upload/v1725641709/VIDOF-MS_dvxyvm.jpg',name:"VIDOF-MS",id:8},
  {url:'https://res.cloudinary.com/dmat13pbd/image/upload/v1724866618/presentation_images/tw5gfvoxqa5pppousqwd.jpg',name:"vidof forte" ,id:9},
  {url:'https://res.cloudinary.com/dmat13pbd/image/upload/v1724867528/presentation_images/pscfdcdvnbgihdbltgjs.jpg',name:"ezivid",id:10},
  {url:'https://res.cloudinary.com/dmat13pbd/image/upload/v1724867536/presentation_images/a7s2d1n95kkqfbd0gatn.jpg',name:"vspar",id:11},
  {url:'https://res.cloudinary.com/dmat13pbd/image/upload/v1724867536/presentation_images/o0wcg55nmcqefpk8alih.jpg',name:"enaflox",id:12},
  {url:'https://res.cloudinary.com/dmat13pbd/image/upload/v1725641921/ENAFLOX-OZ_abosih.jpg',name:"ENAFLOX-OZ SUSP",id:13},
  {url:'https://res.cloudinary.com/dmat13pbd/image/upload/v1724867527/presentation_images/j7vl0b0wb26fyhl2mtkn.jpg',name:"coxivid-60/90",id:14},
  {url:'https://res.cloudinary.com/dmat13pbd/image/upload/v1725642056/Coxivid-TH_rvy6io.jpg',name:"coxivid-th",id:15},
  {url:'https://res.cloudinary.com/dmat13pbd/image/upload/v1724867528/presentation_images/h6yqpil6ddbucrjsmxul.jpg',name:"sefspor-250",id:16},
  {url:'https://res.cloudinary.com/dmat13pbd/image/upload/v1725642195/Veerox-150_g8lw7a.jpg',name:"veerox-150",id:17},
  {url:'https://res.cloudinary.com/dmat13pbd/image/upload/v1724867529/presentation_images/w5j4vhr1seskpt9rii4u.jpg',name:"veecet-mk",id:18},
  {url:'https://res.cloudinary.com/dmat13pbd/image/upload/v1724867529/presentation_images/wotpcw8kh8gqzh1kcoxb.jpg',name:"phexovid-120",id:19},
  {url:'https://res.cloudinary.com/dmat13pbd/image/upload/v1725642287/Phexovid-AM_ibtrre.jpg',name:"phexovid-am",id:20},
  {url:'https://res.cloudinary.com/dmat13pbd/image/upload/v1724867528/presentation_images/fxedhsjxe3roe3ozk2uk.jpg',name:"teravid",id:21},
  {url:'https://res.cloudinary.com/dmat13pbd/image/upload/v1724867530/presentation_images/zpdyszvzkr2hhnuc8ijl.jpg',name:"itrovid",id:22},
  {url:'https://res.cloudinary.com/dmat13pbd/image/upload/v1725642388/itrovid_plus_grjbli.jpg',name:"itrovid-plus",id:23},
  {url:'https://res.cloudinary.com/dmat13pbd/image/upload/v1725642481/Tolsivid-150_n4xakh.jpg',name:"TOLSIVID-150",id:24},
  {url:'https://res.cloudinary.com/dmat13pbd/image/upload/v1724867525/presentation_images/xgydprlvr6iqkaqahubr.jpg',name:"nitvid-8/16",id:25},
  {url:'https://res.cloudinary.com/dmat13pbd/image/upload/v1724867523/presentation_images/gyyxd1o1bmkgoud6pcdh.jpg',name:"vidilon-sr",id:26},
  {url:'https://res.cloudinary.com/dmat13pbd/image/upload/v1724867523/presentation_images/nputvvdnvxw4sugkjqvg.jpg',name:"dnvp",id:27},
  {url:'https://res.cloudinary.com/dmat13pbd/image/upload/v1724866691/presentation_images/cx7ocroznnxqegog4bwo.jpg',name:"cvz",id:28},
  {url:'https://res.cloudinary.com/dmat13pbd/image/upload/v1724867534/presentation_images/eovap50vlyjyqhhasdej.jpg',name:"irovid-xt",id:29},
  {url:'https://res.cloudinary.com/dmat13pbd/image/upload/v1724867523/presentation_images/iu1la4yirfeookzzeo9n.jpg',name:"prostil",id:30},
  {url:'https://res.cloudinary.com/dmat13pbd/image/upload/v1724867535/presentation_images/w3ot3zizfj5k1kaeto1v.jpg',name:"vidon-4 md",id:31},
  {url:'https://res.cloudinary.com/dmat13pbd/image/upload/v1725642761/PULCER-O_cytdza.jpg',name:"PULCER-O",id:32},
  {url:'https://res.cloudinary.com/dmat13pbd/image/upload/v1725642817/PULCER-DSR_mahht6.jpg',name:"PULCER-DSR",id:33},
  {url:'https://res.cloudinary.com/dmat13pbd/image/upload/v1725642926/Rebovid-DSR_New_tivjfu.jpg',name:"REBOVID-DSR",id:34},
  {url:'https://res.cloudinary.com/dmat13pbd/image/upload/v1724867534/presentation_images/z4dbo1bs7jjm9lfmcstp.jpg',name:"rebovid-lsr",id:35},
  {url:'https://res.cloudinary.com/dmat13pbd/image/upload/v1725643021/Methico-1500_xcidtj.jpg',name:"METHICO-1500",id:36},
  {url:'https://res.cloudinary.com/dmat13pbd/image/upload/v1724867535/presentation_images/uqvclik7mn66bqdrfut0.jpg',name:"methico-g",id:37},
  {url:'https://res.cloudinary.com/dmat13pbd/image/upload/v1725643127/METHICO-NT_yc7kbo.jpg',name:"methico-nt",id:38},
  {url:'https://res.cloudinary.com/dmat13pbd/image/upload/v1725643196/FEPAVID-MF_oaz0ix.jpg',name:"FEPAVID-MF",id:39},
  {url:'https://res.cloudinary.com/dmat13pbd/image/upload/v1724867523/presentation_images/ufsyqeyjmrgv510xowme.jpg',name:"nimvid-p",id:40},
  {url:'https://res.cloudinary.com/dmat13pbd/image/upload/v1724867532/presentation_images/ehmi4aqq5jclmszbfqv2.jpg',name:"vovinac-plus",id:41},
  {url:'https://res.cloudinary.com/dmat13pbd/image/upload/v1724867532/presentation_images/eq64crgevr5jvegvovl4.jpg',name:"vovinac-sp",id:42},
  {url:'https://res.cloudinary.com/dmat13pbd/image/upload/v1724867535/presentation_images/asb7mfdmmj8uttlay6et.jpg',name:"vovinac-mr",id:43},
  {url:'https://res.cloudinary.com/dmat13pbd/image/upload/v1725643406/Vovinac-TH_ahjgcz.jpg',name:"vovinac-th",id:44},
  {url:'https://res.cloudinary.com/dmat13pbd/image/upload/v1724867529/presentation_images/xwe8a6iyonimq7vkfkoi.jpg',name:"vecan-20",id:45},
  {url:'https://res.cloudinary.com/dmat13pbd/image/upload/v1724867535/presentation_images/pid0klbfal5lasmeefuk.jpg',name:"clozen-p",id:46},
  {url:'https://res.cloudinary.com/dmat13pbd/image/upload/v1725643555/Tri-MF_gkrebj.jpg',name:"tri-mf",id:47},
  {url:'https://res.cloudinary.com/dmat13pbd/image/upload/v1724866609/presentation_images/kgdebvorjmagrwodovhq.jpg',name:"Sarvid-h",id:48},
  {url:'https://res.cloudinary.com/dmat13pbd/image/upload/v1725643663/Amlovid-AT_xg1cdx.jpg',name:"AMLOVID-AT",id:49},
  {url:'https://res.cloudinary.com/dmat13pbd/image/upload/v1724866619/presentation_images/te6d2zzunuxxcvxzgzbz.jpg',name:"solovid-4",id:50},
  {url:'https://res.cloudinary.com/dmat13pbd/image/upload/v1724867536/presentation_images/hcimqpouzziybnjzgyaw.jpg',name:"cotivid",id:51},
  {url:'https://res.cloudinary.com/dmat13pbd/image/upload/v1724866615/presentation_images/ygt3buasua7xtcesvtev.jpg',name:"Alvid-ir",id:52},
  {url:'https://res.cloudinary.com/dmat13pbd/image/upload/v1724866686/presentation_images/dtvwvjjwm70ztnloay82.jpg',name:"pronet-200",id:53},
  {url:'https://res.cloudinary.com/dmat13pbd/image/upload/v1725643820/Laxivid-Plus_vzic1y.jpg',name:"Laxivid-Plus",id:54},
  {url:'https://res.cloudinary.com/dmat13pbd/image/upload/v1724866615/presentation_images/rpe8nu3qs0cb8qx4useb.jpg',name:"Burniz",id:55},
  {url:'https://res.cloudinary.com/dmat13pbd/image/upload/v1724866615/presentation_images/vqu6msd4brjysu9u0wjy.jpg',name:"tastivid",id:56},
  {url:'https://res.cloudinary.com/dmat13pbd/image/upload/v1724867524/presentation_images/uwibyx30sm5tvcsgj2ev.jpg',name:"triger",id:57},
  {url:'https://res.cloudinary.com/dmat13pbd/image/upload/v1724866618/presentation_images/yb2iyzjultkiwwzzdslp.jpg',name:"vytone",id:58},
  {url:'https://res.cloudinary.com/dmat13pbd/image/upload/v1724866614/presentation_images/gor5tgrkdlukx8qf2ufe.jpg',name:"Livix-s",id:59},
  {url:'https://res.cloudinary.com/dmat13pbd/image/upload/v1724867535/presentation_images/xdawriumgujp20lrq1os.jpg',name:"vyser",id:60},
  {url:'https://res.cloudinary.com/dmat13pbd/image/upload/v1724866691/presentation_images/lutl3beadisdsmsqlycl.jpg',name:"thermovid",id:61},
  {url:'https://res.cloudinary.com/dmat13pbd/image/upload/v1724866690/presentation_images/jjnumuk5msv2lcpouxd9.jpg',name:"hexicare",id:62},
  {url:'https://res.cloudinary.com/dmat13pbd/image/upload/v1724866607/presentation_images/xizi4pjlu5h916va73qh.jpg',name:"Betavid",id:63},
  {url:'https://res.cloudinary.com/dmat13pbd/image/upload/v1724866619/presentation_images/itpzrpgrc6yhwz8esyia.jpg',name:"novid plus",id:64},
  {url:'https://res.cloudinary.com/dmat13pbd/image/upload/v1724866688/presentation_images/npblaehnicjak2c3nivv.jpg',name:"calvid",id:65},
  {url:'https://res.cloudinary.com/dmat13pbd/image/upload/v1724867526/presentation_images/in6hg0ww3a4e52uetoyl.jpg',name:"awash",id:66},
  {url:'https://res.cloudinary.com/dmat13pbd/image/upload/v1725644258/SITMET_lujebo.jpg',name:"sitmet",id:67},
  {url:'https://res.cloudinary.com/dmat13pbd/image/upload/v1724867529/presentation_images/kyb8q1xyknv9yzyazyeu.jpg',name:"vpreg",id:68},
  {url:'https://res.cloudinary.com/dmat13pbd/image/upload/v1724867526/presentation_images/rmsod3h9ai0daqdxy4tm.jpg',name:"bexe",id:69},
  {url:'https://res.cloudinary.com/dmat13pbd/image/upload/v1725644404/V-Gain_zq6jrs.jpg',name:"v-gain",id:70},
  {url:'https://res.cloudinary.com/dmat13pbd/image/upload/v1724867533/presentation_images/yuo8gr4hk75s2plwulzm.jpg',name:"biovid-4g",id:71},
  {url:'https://res.cloudinary.com/dmat13pbd/image/upload/v1725644523/Strobon_New_crtuni.jpg',name:"STROBON Susp",id:72},
  {url:'https://res.cloudinary.com/dmat13pbd/image/upload/v1725644574/Strobon-D3_hdlurd.jpg',name:"STROBON d3",id:73},
  {url:'https://res.cloudinary.com/dmat13pbd/image/upload/v1725644628/STROBON-K27_rveh7o.jpg',name:"STROBON k27",id:74},
  {url:'https://res.cloudinary.com/dmat13pbd/image/upload/v1725644689/SACOVID_r4ywyo.jpg',name:"SACOVID",id:75},
  {url:'https://res.cloudinary.com/dmat13pbd/image/upload/v1724867527/presentation_images/ohdgvoz81a5xix0q5q4a.jpg',name:"provid-plus",id:76},
  {url:'https://res.cloudinary.com/dmat13pbd/image/upload/v1724867531/presentation_images/uhrkz3lmdwx05ujso6qm.jpg',name:"bevit-plus",id:77},
  {url:'https://res.cloudinary.com/dmat13pbd/image/upload/v1725644812/Ferovid-XT_myslif.jpg',name:"ferovid-xt",id:78},
  {url:'https://res.cloudinary.com/dmat13pbd/image/upload/v1725644885/Foilvid_ufrtvv.jpg',name:"folvid",id:79},
  {url:'https://res.cloudinary.com/dmat13pbd/image/upload/v1725644959/Bexe-D3_xcmwjf.jpg',name:"bexe-d3",id:80},
  {url:'https://res.cloudinary.com/dmat13pbd/image/upload/v1724867534/presentation_images/cpcaoeygmsx7vozq6wow.jpg',name:"cdp",id:81},
  {url:'https://res.cloudinary.com/dmat13pbd/image/upload/v1724867536/presentation_images/t3wdn9vq1ghyssraocrl.jpg',name:"xylovid",id:82},
  {url:'https://res.cloudinary.com/dmat13pbd/image/upload/v1724867533/presentation_images/bvrpvoyllvtdlgzymmkn.jpg',name:"fluvid",id:83},
  {url:'https://res.cloudinary.com/dmat13pbd/image/upload/v1724867533/presentation_images/dnxed6ioxmstflvnbgrq.jpg',name:"veerest",id:84},
  {url:'https://res.cloudinary.com/dmat13pbd/image/upload/v1724867532/presentation_images/e5syck4yl4mgfq756enr.jpg',name:"dexovid",id:85},
  {url:'https://res.cloudinary.com/dmat13pbd/image/upload/v1724867525/presentation_images/ifjvlkruzpxmdbonbemt.jpg',name:"amvid-l",id:86},
  {url:'https://res.cloudinary.com/dmat13pbd/image/upload/v1725645187/Pinex_New_ucusfr.jpg',name:"pinex",id:87},
  {url:'https://res.cloudinary.com/dmat13pbd/image/upload/v1724867524/presentation_images/jz0dyildncsfyyqbjmaj.jpg',name:"mikoz",id:88},
  {url:'https://res.cloudinary.com/dmat13pbd/image/upload/v1724867531/presentation_images/yfc0m823s9kpufrplvbp.jpg',name:"traxon-s",id:89},
  {url:'https://res.cloudinary.com/dmat13pbd/image/upload/v1724867531/presentation_images/a6uhrkmwmxvvh92a2vr8.jpg',name:"methico-plus",id:90},
  {url:'https://res.cloudinary.com/dmat13pbd/image/upload/v1724867531/presentation_images/aetiaaavl4jxboxp3p5h.jpg',name:"bactis",id:91},
  {url:'https://res.cloudinary.com/dmat13pbd/image/upload/v1724867524/presentation_images/icnrnjbvwdok4i8ju3rq.jpg',name:"irovid 5ml",id:92},
  {url:'https://res.cloudinary.com/dmat13pbd/image/upload/v1724867524/presentation_images/oqdjqg9jfinh4upqrj6r.jpg',name:"pinmox-cv",id:93},
  {url:'https://res.cloudinary.com/dmat13pbd/image/upload/v1724867524/presentation_images/yav1gzkfp4yylidjhn1c.jpg',name:"pulcer",id:94},
  {url:'https://res.cloudinary.com/dmat13pbd/image/upload/v1724867525/presentation_images/ldtlxrtd8njy9bvyn7ap.jpg',name:"divicod 25",id:95},
  {url:'https://res.cloudinary.com/dmat13pbd/image/upload/v1724867531/presentation_images/uisdvqpov9y7c3hlk05y.jpg',name:"dermolin",id:96},
  {url:'https://res.cloudinary.com/dmat13pbd/image/upload/v1724867527/presentation_images/by3zmpcnektsbhwsm4qh.jpg',name:"tvt",id:97},
  {url:'https://res.cloudinary.com/dmat13pbd/image/upload/v1724867527/presentation_images/lkofbqrjwvi0issxvjgb.jpg',name:"pexo",id:98},
  {url:'https://res.cloudinary.com/dmat13pbd/image/upload/v1725645533/SOAP_LIT_rtzmb5.jpg',name:"SOAP LIT",id:99},
  {url:'https://res.cloudinary.com/dmat13pbd/image/upload/v1725645596/Neemdi_vi6euk.jpg',name:"Neemdi",id:100},
  {url:'https://res.cloudinary.com/dmat13pbd/image/upload/v1725645681/Glowvid_ctl5qc.jpg',name:"Glowvid",id:101},




  // {url:'https://res.cloudinary.com/dmat13pbd/image/upload/v1724866677/presentation_images/pavi3ahfci58pz59mh25.jpg',name:"proxim-az"},
  // {url:'https://res.cloudinary.com/dmat13pbd/image/upload/v1724866688/presentation_images/xdebtu8odqhnqiv8bp42.jpg',name:"vivid-labs"},
  // {url:'https://res.cloudinary.com/dmat13pbd/image/upload/v1724867523/presentation_images/fgeocaesvdtzdmomd7rw.jpg',name:"travid-p"},
  // {url:'https://res.cloudinary.com/dmat13pbd/image/upload/v1724867524/presentation_images/uzkeehzggtkzyyv3g2ll.jpg',name:"tazovid 4.5gm"},
  // {url:'https://res.cloudinary.com/dmat13pbd/image/upload/v1724867524/presentation_images/bspmd9wheox3u8xbik0g.jpg',name:"ensef"},
  // {url:'https://res.cloudinary.com/dmat13pbd/image/upload/v1724867525/presentation_images/xfafnbiwp0gi8b7sm9lc.jpg',name:"ntr"},
  // {url:'https://res.cloudinary.com/dmat13pbd/image/upload/v1724867525/presentation_images/ybezrqhk9mfamicb1qwf.jpg',name:"crackovid"},
  // {url:'https://res.cloudinary.com/dmat13pbd/image/upload/v1724867526/presentation_images/nxizlhu2hsvnzolykwnm.jpg',name:"vegain"},
  // {url:'https://res.cloudinary.com/dmat13pbd/image/upload/v1724867526/presentation_images/v8s2z7ebjb7cerneewt1.jpg',name:"moupik"},
  // {url:'https://res.cloudinary.com/dmat13pbd/image/upload/v1724867526/presentation_images/gc5whmkcwfhadqcf0wxp.jpg',name:"ketowin zpto"},
  // {url:'https://res.cloudinary.com/dmat13pbd/image/upload/v1724867527/presentation_images/gfkkr6ocbwyt0k1qw4a8.jpg',name:"pulsar dsr"},
  // {url:'https://res.cloudinary.com/dmat13pbd/image/upload/v1724867528/presentation_images/mzf9sdgahpumv4cigpip.jpg',name:"vinate-l"},
  // {url:'https://res.cloudinary.com/dmat13pbd/image/upload/v1724867528/presentation_images/pscfdcdvnbgihdbltgjs.jpg',name:"ezivid"},
  // {url:'https://res.cloudinary.com/dmat13pbd/image/upload/v1724867529/presentation_images/col1m6tuxqjt5ty2qfhq.jpg',name:"tranvid"},
  // {url:'https://res.cloudinary.com/dmat13pbd/image/upload/v1724867529/presentation_images/kvyj5lolii5o3yng92ch.jpg',name:"tri-md"},
  // {url:'https://res.cloudinary.com/dmat13pbd/image/upload/v1724867530/presentation_images/wky8ht556plsjtekgyjy.jpg',name:"vidon-o"},
  // {url:'https://res.cloudinary.com/dmat13pbd/image/upload/v1724867533/presentation_images/ckdsl9ksemwrhxp6ab87.jpg',name:"argivid"},
  // {url:'https://res.cloudinary.com/dmat13pbd/image/upload/v1724867533/presentation_images/zt0x15frqdrmsh1lxjxf.jpg',name:"strobin d3"},
  // {url:'https://res.cloudinary.com/dmat13pbd/image/upload/v1724867534/presentation_images/erkpol0bzxzoq6x31jpw.jpg',name:"fepavid"},
  // {url:'https://res.cloudinary.com/dmat13pbd/image/upload/v1724867534/presentation_images/iejglbrs7smjf6sub0ze.jpg',name:"lexivid-plus"},




  {url:'https://res.cloudinary.com/dmat13pbd/image/upload/v1724867525/presentation_images/gdwuepgyampal23tlzjw.jpg',name:"thank you"},


];

const useLazyLoad = (imageUrl) => {
  const [src, setSrc] = useState(null);
  const imgRef = useRef();

  const handleIntersection = useCallback((entries) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      setSrc(imageUrl);
      observer.disconnect();
    }
  }, [imageUrl]);

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      rootMargin: '0px',
      threshold: 0.1
    });

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (observer && imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, [handleIntersection]);

  return [src, imgRef];
};

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const intervalRef = useRef(null);
  const timeoutRef = useRef(null);
  const activeThumbnailRef = useRef(null);
  const sidebarRef = useRef(null);
  const [FullScreen, setFullScreen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const startSlider = () => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 8000);
    }
  };

  const stopSlider = () => {
    clearInterval(intervalRef.current);
  };

  const resetSlider = () => {
    stopSlider();
    setIsPaused(true);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setIsPaused(false);
      startSlider();
    }, 15000);
  };

  useEffect(() => {
    startSlider();

    return () => {
      stopSlider();
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleImageClick = (index) => {
    setCurrentIndex(index);
    resetSlider();
  };

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    if (term) {
      const filteredSuggestions = images.filter((image) =>
        image.name.toLowerCase().includes(term.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (index) => {
    const imageIndex = images.findIndex((img) => img.name === index.name);
    if (imageIndex !== -1) {
      setCurrentIndex(imageIndex);
      setSearchTerm('');
      setSuggestions([]);
      resetSlider();
    }
  };

  useEffect(() => {
    if (activeThumbnailRef.current && sidebarRef.current) {
      const sidebar = sidebarRef.current;
      const activeThumbnail = activeThumbnailRef.current;

      const isMobile = window.innerWidth <= 768;

      if (isMobile) {
        const sidebarWidth = sidebar.clientWidth;
        const thumbnailLeft = activeThumbnail.offsetLeft;
        const thumbnailWidth = activeThumbnail.clientWidth;

        sidebar.scrollLeft = thumbnailLeft - (sidebarWidth / 2) + (thumbnailWidth / 2);
      } else {
        const sidebarHeight = sidebar.clientHeight;
        const thumbnailTop = activeThumbnail.offsetTop;
        const thumbnailHeight = activeThumbnail.clientHeight;

        sidebar.scrollTop = thumbnailTop - (sidebarHeight / 2) + (thumbnailHeight / 2);
      }
    }
  }, [currentIndex]);

  return (
    <>
      {FullScreen &&
        <div className='full_screen'>
          <div className='product_main'>
            <img src={images[currentIndex].url} alt={`Slide ${currentIndex + 1}`} loading='lazy' />
            <div className='buttons_d'>
              <button onClick={() => {
                setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
                resetSlider();
              }}>prev</button>
              <button onClick={() => setFullScreen(!FullScreen)}>Close Full Mode</button>
              <button onClick={() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
                resetSlider();
              }}>next</button>
            </div>
          </div>
        </div>
      }

      <div className="image-slider">
        <div className='brand_Logo'>
          <img src={BrandLogo} />
        </div>
        <div className="sidebar" ref={sidebarRef}>
          {images?.map((image, index) => (
            <div
              key={index}
              className={`thumbnail ${currentIndex === index ? 'active' : ''}`}
              onClick={() => handleImageClick(index)}
              ref={currentIndex === index ? activeThumbnailRef : null}
            >
              <img src={image?.url || ImagePlaceholder} alt={`Slide ${index + 1}`} loading='lazy' />
              <p>{image?.name?.charAt(0)?.toUpperCase() + image?.name?.slice(1)?.toLowerCase()}</p>
            </div>
          ))}
        </div>
        <div className="main-image">
          <div className='title_search'>
            <input
              type="text"
              placeholder="Search product name"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <p>Welcome to Presentation of Vivid Labs Pvt.Ltd.</p>
          </div>
          {suggestions.length > 0 && (
            <ul className="suggestions">
              {suggestions.map((suggestion, index) => (
                <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
                  {suggestion.name}
                </li>
              ))}
            </ul>
          )}
          <img src={images[currentIndex].url} alt={`Slide ${currentIndex + 1}`} loading='lazy' />
          <div className="buttons_d">
            <button onClick={() => {
              setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
              resetSlider();
            }}>prev</button>
            <button className='opne_desk' onClick={() => setFullScreen(!FullScreen)}>Open Full Mode</button>
            <button onClick={() => {
              setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
              resetSlider();
            }}>next</button>
          </div>
        </div>
        <div className='main_image_mobile'>
          <div className="main-image1">
            <div className='brand_Logo1'>
              <img src={BrandLogo} />
            </div>
            <p>Welcome to Presentation of Vivid Labs Pvt.Ltd.</p>

            <div className='input_suggest'>
              <input
                type="text"
                placeholder="Search product name"
                value={searchTerm}
                onChange={handleSearchChange}
              />
              {suggestions.length > 0 && (
                <ul className="suggestions">
                  {suggestions.map((suggestion, index) => (
                    <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
                      {suggestion.name}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <img src={images[currentIndex].url} alt={`Slide ${currentIndex + 1}`} loading='lazy' />
            <div className="buttons_d">
              <button onClick={() => {
                setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
                resetSlider();
              }}>prev</button>
              <button className='opne_desk' onClick={() => setFullScreen(!FullScreen)}>Open Full Mode</button>
              <button onClick={() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
                resetSlider();
              }}>next</button>
            </div>
          </div>
        </div>
        <div className="control-buttons">
          <button onClick={startSlider}>Start</button>
          <button onClick={stopSlider}>Stop</button>
        </div>
      </div>
    </>
  );
};

export default ImageSlider;
