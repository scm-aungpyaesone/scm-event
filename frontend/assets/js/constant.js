
// for server
const API_URL = "https://scmevent.scm-stg.com/backend/api";

// for development
// const API_URL = "http://localhost:8000/api";

// gender: 0 for male, 1 for female
// is_excluded is restriction for members who will not receive special gift
// is_special for members who gives special gift
// is_for -> determining special gift type, 0 for male; 1 for female
const gifts = [
  {
    name: "Akary Thein",
    staff_id: "E-00236",
    profile_img: "akary_thein.png",
    gift_img: "akary_thein.JPEG",
    gender: 1,
  },
  {
    name: "Aung Htet Lin",
    staff_id: "E-00376",
    profile_img: "aung_htet_lin.png",
    gift_img: "aung_htet_lin.JPEG",
    gender: 0,
  },
  {
    name: "Aung Kyaw Oo",
    staff_id: "E-00228",
    profile_img: "aung_kyaw_oo.png",
    gift_img: "aung_kyaw_oo.JPEG",
    gender: 0,
  },
  {
    name: "Aung Linn Naing",
    staff_id: "E-00092",
    profile_img: "aung_linn_naing.png",
    gift_img: "aung_linn_naing.JPEG",
    gender: 0,
  },
  {
    name: "Aung Pyae Sone",
    staff_id: "E-00304",
    profile_img: "aung_pyae_sone.png",
    gift_img: "aung_pyae_sone.jpeg",
    gender: 0,
  },
  {
    name: "Aye Myat Myat Khine",
    staff_id: "E-00395",
    profile_img: "aye_myat_myat_khine.jpg",
    gift_img: "aye_myat_myat_khine.jpg",
    gender: 1,
  },
  {
    name: "Aye Myat Thu",
    staff_id: "E-00384",
    profile_img: "aye_myat_thu.png",
    gift_img: "aye_myat_thu.JPEG",
    gender: 1,
  },
  {
    name: "Aye Myat Thuzar Han",
    staff_id: "E-00364",
    profile_img: "aye_myat_thuzar_han.png",
    gift_img: "aye_myat_thuzar_han.JPEG",
    gender: 1,
  },
  {
    name: "Aye Mya Mon",
    staff_id: "E-00326",
    profile_img: "aye_mya_mon.png",
    gift_img: "aye_mya_mon.jpg",
    gender: 1,
  },
  {
    name: "Aye Su Paing",
    staff_id: "E-00170",
    profile_img: "aye_su_paing.png",
    gift_img: "aye_su_paing.jpg",
    gender: 1,
  },
  {
    name: "Aye Thandar Moe",
    staff_id: "E-00284",
    profile_img: "aye_thandar_moe.png",
    gift_img: "aye_thandar_moe.jpg",
    gender: 1,
  },
  {
    name: "Chan Myae Khin",
    staff_id: "E-00396",
    profile_img: "chan_myae_khin.jpg",
    gift_img: "sample_gift_01.jpg",
    gender: 1,
  },
  {
    name: "Chaw Chit Su Thwe",
    staff_id: "E-00359",
    profile_img: "chaw_chit_su_thwe.png",
    gift_img: "chaw_chit_su_thwe.jpg",
    gender: 1,
  },
  {
    name: "Chit Su Su Hlaing",
    staff_id: "E-00265",
    profile_img: "chit_su_su_hlaing.png",
    gift_img: "chit_su_su_hlaing.JPEG",
    gender: 1,
  },
  {
    name: "Eaint Hmue Thapye",
    staff_id: "E-00362",
    profile_img: "eaint_hmue_thapye.png",
    gift_img: "eaint_hmue_thapye.jpeg",
    gender: 1,
  },
  {
    name: "Ei Ei Tone",
    staff_id: "E-00356",
    profile_img: "ei_ei_tone.png",
    gift_img: "ei_ei_tone.jpeg",
    gender: 1,
  },
  {
    name: "Ei Mon Htun",
    staff_id: "E-00306",
    profile_img: "ei_mon_htun.png",
    gift_img: "ei_mon_htun.jpg",
    gender: 1,
  },
  {
    name: "Ei Mon San",
    staff_id: "E-00313",
    profile_img: "ei_mon_san.png",
    gift_img: "ei_mon_san.JPEG",
    gender: 1,
  },
  {
    name: "Hein Htet Zaw",
    staff_id: "E-00312",
    profile_img: "hein_htet_zaw.png",
    gift_img: "hein_htet_zaw.jpeg",
    gender: 0,
  },
  {
    name: "Hnin Wai Lwin",
    staff_id: "E-00381",
    profile_img: "hnin_wai_lwin.png",
    gift_img: "hnin_wai_lwin.JPEG",
    gender: 1,
  },
  {
    name: "Hnin Wai Wai Aung",
    staff_id: "E-00071",
    profile_img: "hnin_wai_wai_aung.png",
    gift_img: "hnin_wai_wai_aung.JPEG",
    gender: 1,
  },
  {
    name: "Hnin Wai Yan",
    staff_id: "E-00348",
    profile_img: "hnin_wai_yan.png",
    gift_img: "hnin_wai_yan.JPEG",
    gender: 1,
  },
  {
    name: "Hsaung Htet Htet Kyaw",
    staff_id: "E-00299",
    profile_img: "hsaung_htet_htet_kyaw.png",
    gift_img: "hsaung_htet_htet_kyaw.JPEG",
    gender: 1,
  },
  {
    name: "Hsu Mon Lynn",
    staff_id: "E-00363",
    profile_img: "hsu_mon_lynn.png",
    gift_img: "hsu_mon_lynn.jpg",
    gender: 1,
  },
  {
    name: "Hsu Watty Nwe",
    staff_id: "E-00269",
    profile_img: "hsu_watty_nwe.JPEG",
    gift_img: "hsu_watty_nwe.JPEG",
    gender: 1,
  },
  {
    name: "Htay Hlaing",
    staff_id: "E-00327",
    profile_img: "htay_hlaing.JPEG",
    gift_img: "htay_hlaing.jpg",
    gender: 1,
  },
  {
    name: "Htet Aung",
    staff_id: "E-00193",
    profile_img: "htet_aung.jpg",
    gift_img: "htet_aung.jpg",
    gender: 0,
  },
  {
    name: "Htet Htet Aung",
    staff_id: "E-00386",
    profile_img: "htet_htet_aung.jpeg",
    gift_img: "htet_htet_aung.JPEG",
    gender: 1,
  },
  {
    name: "Htet Htet Khine",
    staff_id: "E-00198",
    profile_img: "htet_htet_khine.JPEG",
    gift_img: "htet_htet_khine.jpeg",
    gender: 1,
  },
  {
    name: "Htet Htet Oo",
    staff_id: "E-00373",
    profile_img: "htet_htet_oo.jpg",
    gift_img: "htet_htet_oo.jpeg",
    gender: 1,
  },
  {
    name: "Htet Htet Oo Wai",
    staff_id: "E-00330",
    profile_img: "htet_htet_oo_wai.JPG",
    gift_img: "htet_htet_oo_wai.JPEG",
    gender: 1,
  },
  {
    name: "Htet Htoo Aung",
    staff_id: "E-00353",
    profile_img: "htet_htoo_aung.JPEG",
    gift_img: "htet_htoo_aung.jpeg",
    gender: 0,
  },
  {
    name: "Htet Shine",
    staff_id: "E-00278",
    profile_img: "htet_shine.jpg",
    gift_img: "htet_shine.jpg",
    gender: 0,
  },
  {
    name: "Htet Thinzar Mon",
    staff_id: "E-00188",
    profile_img: "htet_thinzar_mon.JPEG",
    gift_img: "htet_thinzar_mon.JPEG",
    gender: 1,
  },
  {
    name: "Htet Tun Lu",
    staff_id: "E-00370",
    profile_img: "htet_tun_lu.jpg",
    gift_img: "htet_tun_lu.jpeg",
    gender: 0,
  },
  {
    name: "Htun Htun Myat",
    staff_id: "E-00289",
    profile_img: "htun_htun_myat.JPEG",
    gift_img: "htun_htun_myat.png",
    gender: 0,
  },
  {
    name: "Kaung Eain San Htay",
    staff_id: "E-00220",
    profile_img: "kaung_eain_san_htay.jpg",
    gift_img: "kaung_eain_san_htay.JPEG",
    gender: 1,
  },
  {
    name: "Kaung Khant Naing",
    staff_id: "E-00387",
    profile_img: "kaung_khant_naing.JPEG",
    gift_img: "kaung_khant_naing.JPEG",
    gender: 0,
  },
  {
    name: "Kaung Myat Thu",
    staff_id: "E-00217",
    profile_img: "kaung_myat_thu.JPEG",
    gift_img: "kaung_myat_thu.jpeg",
    gender: 0,
  },
  {
    name: "Kaung Myat Thway",
    staff_id: "E-00336",
    profile_img: "kaung_myat_thway.jpg",
    gift_img: "kaung_myat_thway.jpg",
    gender: 0,
  },
  {
    name: "Kaung Soe San",
    staff_id: "E-00234",
    profile_img: "kaung_soe_san.jpeg",
    gift_img: "kaung_soe_san.JPEG",
    gender: 0,
  },
  {
    name: "Kay Thi Nwe",
    staff_id: "E-00246",
    profile_img: "kay_thi_nwe.jpeg",
    gift_img: "kay_thi_nwe.JPEG",
    gender: 1,
  },
  {
    name: "Kay Zin Aung",
    staff_id: "E-00375",
    profile_img: "kay_zin_aung.jpeg",
    gift_img: "kay_zin_aung.jpg",
    gender: 1,
  },
  {
    name: "Khaing Min Tun",
    staff_id: "E-00175",
    profile_img: "khaing_min_tun.jpg",
    gift_img: "khaing_min_tun.JPEG",
    gender: 0,
  },
  {
    name: "Khaing Su Hlaing",
    staff_id: "E-00290",
    profile_img: "khaing_su_hlaing.jpg",
    gift_img: "khaing_su_hlaing.JPEG",
    gender: 1,
  },
  {
    name: "Khine Khine Oo",
    staff_id: "E-00140",
    profile_img: "khine_khine_oo.jpg",
    gift_img: "khine_khine_oo.JPEG",
    gender: 1,
  },
  {
    name: "Khine Nyein Than",
    staff_id: "E-00300",
    profile_img: "khine_nyein_than.JPEG",
    gift_img: "khine_nyein_than.jpg",
    gender: 1,
  },
  {
    name: "Khine Shwe Sin Aung",
    staff_id: "E-00342",
    profile_img: "khine_shwe_sin_aung.png",
    gift_img: "khine_shwe_sin_aung.JPEG",
    gender: 1,
  },
  {
    name: "Khine Zin Thaw",
    staff_id: "E-00371",
    profile_img: "khine_zin_thaw.jpeg",
    gift_img: "khine_zin_thaw.jpeg",
    gender: 1,
  },
  {
    name: "Khin Aye Aye Nyein",
    staff_id: "E-00393",
    profile_img: "khin_aye_aye_nyein.jpg",
    gift_img: "khin_aye_aye_nyein.jpeg",
    gender: 1,
  },
  {
    name: "Khin Hmone Chal",
    staff_id: "E-00350",
    profile_img: "khin_hmone_chal.jpeg",
    gift_img: "khin_hmone_chal.jpeg",
    gender: 1,
  },
  {
    name: "Khin Marlar Myo",
    staff_id: "E-00101",
    profile_img: "khin_marlar_myo.jpg",
    gift_img: "khin_marlar_myo.png",
    gender: 1,
  },
  {
    name: "Khin Nandar Thein",
    staff_id: "E-00154",
    profile_img: "khin_nandar_thein.jpg",
    gift_img: "khin_nandar_thein.jpg",
    gender: 1,
  },
  {
    name: "Khin Pyae Sone",
    staff_id: "E-00115",
    profile_img: "khin_pyae_sone.jpg",
    gift_img: "khin_pyae_sone.JPEG",
    gender: 1,
  },
  {
    name: "Khin Sandar Tun",
    staff_id: "E-00379",
    profile_img: "khin_sandar_tun.JPEG",
    gift_img: "khin_sandar_tun.png",
    gender: 1,
  },
  {
    name: "Kyant Khine",
    staff_id: "E-00305",
    profile_img: "kyant_khine.JPEG",
    gift_img: "kyant_khine.PNG",
    gender: 0,
  },
  {
    name: "Kyaw Htin Soe",
    staff_id: "E-00279",
    profile_img: "kyaw_htin_soe.JPEG",
    gift_img: "kyaw_htin_soe.JPEG",
    is_excluded: 1,
    gender: 0,
  },
  {
    name: "Kyaw Soe Naing",
    staff_id: "E-00044",
    profile_img: "kyaw_soe_naing.png",
    gift_img: "special_gift_3.JPEG",
    is_excluded: 1,
    gender: 0,
    is_special: 1,
    is_for: 0,
    giftName: "Special Gift 3"
  },
  {
    name: "Kyi Myat Noe Soe",
    staff_id: "E-00368",
    profile_img: "kyi_myat_noe_soe.jpg",
    gift_img: "kyi_myat_noe_soe.JPEG",
    gender: 1,
  },
  {
    name: "Lily Maw",
    staff_id: "E-00339",
    profile_img: "lily_maw.JPEG",
    gift_img: "lily_maw.jpg",
    gender: 1,
  },
  {
    name: "Lin Htet Paing",
    staff_id: "E-00257",
    profile_img: "lin_htet_paing.JPG",
    gift_img: "lin_htet_paing.JPEG",
    gender: 0,
  },
  {
    name: "Lwin Mar Win",
    staff_id: "E-00227",
    profile_img: "lwin_mar_win.JPEG",
    gift_img: "lwin_mar_win.JPEG",
    gender: 1,
  },
  {
    name: "Lwin Phyo Aung",
    staff_id: "E-00378",
    profile_img: "lwin_phyo_aung.jpeg",
    gift_img: "lwin_phyo_aung.JPEG",
    gender: 0,
  },
  {
    name: "Mar Khaing Oo",
    staff_id: "E-00321",
    profile_img: "mar_khaing_oo.JPEG",
    gift_img: "mar_khaing_oo.jpeg",
    is_excluded: 1,
    gender: 1,
  },
  {
    name: "May Myat Mon",
    staff_id: "E-00292",
    profile_img: "may_myat_mon.jpg",
    gift_img: "may_myat_mon.png",
    gender: 1,
  },
  {
    name: "May Myat Noe Oo",
    staff_id: "E-00374",
    profile_img: "may_myat_noe_oo.JPEG",
    gift_img: "may_myat_noe_oo.JPEG",
    gender: 1,
  },
  {
    name: "May Soe Thinzar Moe",
    staff_id: "E-00215",
    profile_img: "may_soe_thinzar_moe.JPEG",
    gift_img: "may_soe_thinzar_moe.jpeg",
    gender: 1,
  },
  {
    name: "May Thae Oo",
    staff_id: "E-00130",
    profile_img: "may_thae_oo.JPEG",
    gift_img: "may_thae_oo.jpeg",
    gender: 1,
  },
  {
    name: "May Thin Lwin",
    staff_id: "E-00090",
    profile_img: "may_thin_lwin.jpg",
    gift_img: "may_thin_lwin.JPEG",
    gender: 1,
  },
  {
    name: "May Thin Khaing",
    staff_id: "E-00391",
    profile_img: "may_thin_khaing.JPEG",
    gift_img: "may_thin_khaing.JPEG",
    gender: 1,
  },
  {
    name: "May Thinzar",
    staff_id: "E-00394",
    profile_img: "may_thinzar.jpg",
    gift_img: "may_thinzar.jpg",
    gender: 1,
  },
  {
    name: "May Thu Kyaw",
    staff_id: "E-00337",
    profile_img: "may_thu_kyaw.jpg",
    gift_img: "may_thu_kyaw.jpg",
    gender: 1,
  },
  {
    name: "May Thu Thu Oo",
    staff_id: "E-00238",
    profile_img: "may_thu_thu_oo.JPEG",
    gift_img: "may_thu_thu_oo.jpg",
    gender: 1,
  },
  {
    name: "May Zin Oo",
    staff_id: "E-00178",
    profile_img: "may_zin_oo.JPEG",
    gift_img: "may_zin_oo.JPEG",
    gender: 1,
  },
  {
    name: "Min Aung Paing",
    staff_id: "E-00334",
    profile_img: "min_aung_paing.png",
    gift_img: "min_aung_paing.JPEG",
    gender: 0,
  },
  {
    name: "Min Htet Aung",
    staff_id: "E-00276",
    profile_img: "min_htet_aung.png",
    gift_img: "min_htet_aung.jpeg",
    gender: 0,
  },
  {
    name: "Min Khant Kyaw",
    staff_id: "E-00361",
    profile_img: "min_khant_kyaw.png",
    gift_img: "min_khant_kyaw.jpg",
    gender: 0,
  },
  {
    name: "Min Khant Thu",
    staff_id: "E-00307",
    profile_img: "min_khant_thu.png",
    gift_img: "min_khant_thu.jpg",
    gender: 0,
  },
  {
    name: "Myat Mon",
    staff_id: "E-00259",
    profile_img: "myat_mon.png",
    gift_img: "myat_mon.jpeg",
    gender: 1,
  },
  {
    name: "Myat Mon Thein",
    staff_id: "E-00161",
    profile_img: "myat_mon_thein.png",
    gift_img: "myat_mon_thein.jpg",
    is_excluded: 1,
    gender: 1,
  },
  {
    name: "Myat Thiha",
    staff_id: "E-00242",
    profile_img: "myat_thiha.png",
    gift_img: "myat_thiha.jpeg",
    gender: 0,
  },
  {
    name: "Mya Thet Chal",
    staff_id: "E-00314",
    profile_img: "mya_thet_chal.png",
    gift_img: "mya_thet_chal.JPEG",
    gender: 1,
  },
  {
    name: "Myint Marlar Wai",
    staff_id: "E-00112",
    profile_img: "myint_marlar_wai.png",
    gift_img: "myint_marlar_wai.JPEG",
    gender: 1,
  },
  {
    name: "Myo Thandar Aung",
    staff_id: "E-00285",
    profile_img: "myo_thandar_aung.png",
    gift_img: "myo_thandar_aung.jpeg",
    gender: 1,
  },
  {
    name: "Naing Aung Lwin",
    staff_id: "E-00288",
    profile_img: "naing_aung_lwin.png",
    gift_img: "naing_aung_lwin.JPEG",
    gender: 0,
  },
  {
    name: "Nandar Wutyi",
    staff_id: "E-00340",
    profile_img: "nandar_wutyi.png",
    gift_img: "nandar_wutyi.jpeg",
    gender: 1,
  },
  {
    name: "Nanda Hein",
    staff_id: "E-00380",
    profile_img: "nanda_hein.png",
    gift_img: "nanda_hein.jpg",
    gender: 0,
  },
  {
    name: "Nang Khat Mang",
    staff_id: "E-00231",
    profile_img: "nang_khat_mang.png",
    gift_img: "nang_khat_mang.JPEG",
    gender: 0,
  },
  {
    name: "Nant Thae Zarli Win",
    staff_id: "E-00254",
    profile_img: "nant_thae_zarli_win.jpg",
    gift_img: "nant_thae_zarli_win.jpeg",
    gender: 1,
  },
  {
    name: "Naw Khaing Khin Htoo Mon",
    staff_id: "E-00357",
    profile_img: "naw_khaing_khin_htoo_mon.png",
    gift_img: "naw_khaing_khin_htoo_mon.JPEG",
    gender: 1,
  },
  {
    name: "Nay Lin",
    staff_id: "E-00367",
    profile_img: "nay_lin.png",
    gift_img: "nay_lin.JPEG",
    gender: 0,
  },
  {
    name: "Nay Lin Htoo",
    staff_id: "E-00388",
    profile_img: "nay_lin_htoo.JPEG",
    gift_img: "nay_lin_htoo.jpeg",
    gender: 0,
  },
  {
    name: "Nay Oo Thant",
    staff_id: "E-00221",
    profile_img: "nay_oo_thant.png",
    gift_img: "nay_oo_thant.jpg",
    gender: 0,
  },
  {
    name: "Nilar Win",
    staff_id: "E-00243",
    profile_img: "nilar_win.png",
    gift_img: "nilar_win.png",
    gender: 1,
  },
  {
    name: "Nwe Nwe Win Than",
    staff_id: "E-00163",
    profile_img: "nwe_nwe_win_than.png",
    gift_img: "nwe_nwe_win_than.JPEG",
    gender: 1,
  },
  {
    name: "Nyan Myo Htet",
    staff_id: "E-00256",
    profile_img: "nyan_myo_htet.png",
    gift_img: "nyan_myo_htet.JPEG",
    gender: 0,
  },
  {
    name: "Pann Ei Khaing",
    staff_id: "E-00323",
    profile_img: "pann_ei_khaing.png",
    gift_img: "pann_ei_khaing.JPEG",
    gender: 1,
  },
  {
    name: "Phue Pwint Phway",
    staff_id: "E-00343",
    profile_img: "phue_pwint_phway.JPEG",
    gift_img: "phue_pwint_phway.JPEG",
    gender: 1,
  },
  {
    name: "Phyo Htet Aung",
    staff_id: "E-00324",
    profile_img: "phyo_htet_aung.jpg",
    gift_img: "phyo_htet_aung.JPEG",
    gender: 0,
  },
  {
    name: "Phyo Su Paing",
    staff_id: "E-00385",
    profile_img: "phyo_su_paing.JPEG",
    gift_img: "phyo_su_paing.jpg",
    gender: 1,
  },
  {
    name: "Pwint Phyu Oo",
    staff_id: "E-00341",
    profile_img: "pwint_phyu_oo.JPEG",
    gift_img: "pwint_phyu_oo.jpg",
    gender: 1,
  },
  {
    name: "Pyae Pyae Han",
    staff_id: "E-00365",
    profile_img: "pyae_pyae_han.jpg",
    gift_img: "pyae_pyae_han.jpeg",
    gender: 0,
  },
  {
    name: "Sandar Moe",
    staff_id: "E-00383",
    profile_img: "sandar_moe.jpeg",
    gift_img: "sandar_moe.JPEG",
    gender: 1,
  },
  {
    name: "Saw Bala",
    staff_id: "E-00061",
    profile_img: "saw_bala.jpg",
    gift_img: "saw_bala.JPEG",
    gender: 0,
  },
  {
    name: "Sein Moh Moh Zin",
    staff_id: "E-00191",
    profile_img: "sein_moh_moh_zin.jpeg",
    gift_img: "sein_moh_moh_zin.JPEG",
    gender: 1,
  },
  {
    name: "Shoon Htet Oo",
    staff_id: "E-00252",
    profile_img: "shoon_htet_oo.JPEG",
    gift_img: "shoon_htet_oo.jpeg",
    gender: 1,
  },
  {
    name: "Shoon Latt Pyae",
    staff_id: "E-00366",
    profile_img: "shoon_latt_pyae.jpg",
    gift_img: "shoon_latt_pyae.jpeg",
    gender: 1,
  },
  {
    name: "Shwe Yi Pyae Sone",
    staff_id: "E-00297",
    profile_img: "shwe_yi_pyae_sone.JPEG",
    gift_img: "shwe_yi_pyae_sone.JPEG",
    is_excluded: 1,
    gender: 1,
  },
  {
    name: "Si Thu Bo",
    staff_id: "E-00280",
    profile_img: "si_thu_bo.JPEG",
    gift_img: "si_thu_bo.JPEG",
    gender: 0,
  },
  {
    name: "Si Thu Phyo",
    staff_id: "E-00263",
    profile_img: "si_thu_phyo.JPEG",
    gift_img: "si_thu_phyo.JPEG",
    gender: 0,
  },
  {
    name: "Soe Htet Aung",
    staff_id: "E-00201",
    profile_img: "soe_htet_aung.jpeg",
    gift_img: "soe_htet_aung.JPEG",
    gender: 0,
  },
  {
    name: "Soe Min Thant",
    staff_id: "E-00349",
    profile_img: "soe_min_thant.JPEG",
    gift_img: "soe_min_thant.jpg",
    gender: 0,
  },
  {
    name: "Su Lae Mon",
    staff_id: "E-00355",
    profile_img: "su_lae_mon.JPEG",
    gift_img: "su_lae_mon.jpeg",
    gender: 1,
  },
  {
    name: "Su Myat Noe Oo",
    staff_id: "E-00351",
    profile_img: "su_myat_noe_oo.JPEG",
    gift_img: "su_myat_noe_oo.jpg",
    gender: 1,
  },
  {
    name: "Su Yee Win",
    staff_id: "E-00098",
    profile_img: "su_yee_win.jpg",
    gift_img: "su_yee_win.JPEG",
    is_excluded: 1,
    gender: 1,
  },
  {
    name: "Swe Swe Aung",
    staff_id: "E-00345",
    profile_img: "swe_swe_aung.jpg",
    gift_img: "swe_swe_aung.jpeg",
    gender: 1,
  },
  {
    name: "Thandar Aung",
    staff_id: "E-00158",
    profile_img: "thandar_aung.JPG",
    gift_img: "thandar_aung.jpg",
    gender: 1,
  },
  {
    name: "Thandar Oo",
    staff_id: "E-00121",
    profile_img: "thandar_oo.JPEG",
    gift_img: "thandar_oo.jpeg",
    is_excluded: 1,
    gender: 1,
  },
  {
    name: "Than Htike Aung",
    staff_id: "E-00360",
    profile_img: "than_htike_aung.jpg",
    gift_img: "than_htike_aung.jpeg",
    gender: 0,
  },
  {
    name: "Tharaphy Win Aung",
    staff_id: "E-00124",
    profile_img: "tharaphy_win_aung.jpg",
    gift_img: "tharaphy_win_aung.jpeg",
    gender: 1,
  },
  {
    name: "Theint Hayman Hnin",
    staff_id: "E-00347",
    profile_img: "theint_hayman_hnin.JPEG",
    gift_img: "theint_hayman_hnin.JPEG",
    gender: 1,
  },
  {
    name: "Theint Thiri Swe",
    staff_id: "E-00222",
    profile_img: "theint_thiri_swe.jpg",
    gift_img: "theint_thiri_swe.jpeg",
    gender: 1,
  },
  {
    name: "Thein Naing Oo",
    staff_id: "E-00205",
    profile_img: "thein_naing_oo.JPEG",
    gift_img: "thein_naing_oo.png",
    gender: 0,
  },
  {
    name: "Thet Minn Htun",
    staff_id: "E-00277",
    profile_img: "thet_minn_htun.jpg",
    gift_img: "thet_minn_htun.jpeg",
    gender: 0,
  },
  {
    name: "Thida Nwe",
    staff_id: "E-00096",
    profile_img: "thida_nwe.jpg",
    gift_img: "thida_nwe.JPEG",
    gender: 1,
  },
  {
    name: "Thin Muyar Win",
    staff_id: "E-00063",
    profile_img: "thin_muyar_win.jpg",
    gift_img: "special_gift_1.JPEG",
    is_excluded: 1,
    gender: 1,
    is_special: 1,
    is_for: "mix",
    giftName: "Special Gift 1"
  },
  {
    name: "Thin Thin Moe",
    staff_id: "E-00249",
    profile_img: "thin_thin_moe.jpg",
    gift_img: "thin_thin_moe.jpg",
    gender: 1,
  },
  {
    name: "Thiri Aung",
    staff_id: "E-00320",
    profile_img: "thiri_aung.jpg",
    gift_img: "thiri_aung.png",
    gender: 1,
  },
  {
    name: "Thura Naing",
    staff_id: "E-00065",
    profile_img: "thura_naing.jpg",
    gift_img: "thura_naing.jpg",
    gender: 0,
  },
  {
    name: "Thu Zar Htwe",
    staff_id: "E-00176",
    profile_img: "thu_zar_htwe.JPEG",
    gift_img: "thu_zar_htwe.jpeg",
    gender: 1,
  },
  {
    name: "Tin Myat Win",
    staff_id: "E-00298",
    profile_img: "tin_myat_win.jpg",
    gift_img: "tin_myat_win.JPEG",
    gender: 1,
  },
  {
    name: "Tin Naing Htun",
    staff_id: "E-00295",
    profile_img: "tin_naing_htun.JPEG",
    gift_img: "tin_naing_htun.JPEG",
    gender: 0,
  },
  {
    name: "Tin Zar Win",
    staff_id: "E-00196",
    profile_img: "tin_zar_win.jpg",
    gift_img: "tin_zar_win.jpeg",
    gender: 1,
  },
  {
    name: "Tun Myint Thein",
    staff_id: "E-00119",
    profile_img: "tun_myint_thein.JPEG",
    gift_img: "tun_myint_thein.JPEG",
    gender: 0,
  },
  {
    name: "Wah Wah Wynn Shwe Hlaing",
    staff_id: "E-00346",
    profile_img: "wah_wah_wynn_shwe_hlaing.JPEG",
    gift_img: "wah_wah_wynn_shwe_hlaing.JPEG",
    gender: 1,
  },
  {
    name: "Wai Wai Khaing 1",
    staff_id: "E-00192",
    profile_img: "wai_wai_khaing 1.jpg",
    gift_img: "wai_wai_khaing_1.JPEG",
    gender: 1,
  },
  {
    name: "Wai Wai Khaing 2",
    staff_id: "E-00332",
    profile_img: "wai_wai_khaing_2.JPEG",
    gift_img: "wai_wai_khaing_2.jpeg",
    gender: 1,
  },
  {
    name: "Win Lhan Phyo",
    staff_id: "E-00162",
    profile_img: "win_lhan_phyo.jpg",
    gift_img: "win_lhan_phyo.JPEG",
    gender: 0,
  },
  {
    name: "Win Ngwe Phyo",
    staff_id: "E-00392",
    profile_img: "win_ngwe_phyo.jpeg",
    gift_img: "win_ngwe_phyo.JPEG",
    gender: 0,
  },
  {
    name: "Win Win Htay",
    staff_id: "E-00200",
    profile_img: "win_win-htay.jpg",
    gift_img: "win_win_htay.jpeg",
    gender: 1,
  },
  {
    name: "Wutyi Theint",
    staff_id: "E-00293",
    profile_img: "wutyi_theint.JPEG",
    gift_img: "wutyi_theint.jpeg",
    gender: 1,
  },
  {
    name: "Yamin Aye",
    staff_id: "E-00199",
    profile_img: "yamin_aye.jpg",
    gift_img: "yamin_aye.png",
    gender: 1,
  },
  {
    name: "Yamin Thaw",
    staff_id: "E-00111",
    profile_img: "yamin_thaw.jpg",
    gift_img: "yamin_thaw.JPEG",
    gender: 1,
  },
  {
    name: "Yamin Thu",
    staff_id: "E-00226",
    profile_img: "yamin_thu.png",
    gift_img: "yamin_thu.JPEG",
    gender: 1,
  },
  {
    name: "Yan Kyaw Min",
    staff_id: "E-00230",
    profile_img: "yan_kyaw_min.JPEG",
    gift_img: "yan_kyaw_min.JPEG",
    gender: 0,
  },
  {
    name: "Yan Myo Aung",
    staff_id: "E-00104",
    profile_img: "yan_myo_aung.jpeg",
    gift_img: "yan_myo_aung.JPEG",
    is_excluded: 1,
    gender: 0,
  },
  {
    name: "Ye Shwe Phyoe",
    staff_id: "E-00382",
    profile_img: "ye_shwe_phyoe.JPEG",
    gift_img: "ye_shwe_phyoe.JPEG",
    gender: 0,
  },
  {
    name: "Ye Zaw Aung",
    staff_id: "E-00390",
    profile_img: "ye_zaw_aung.JPEG",
    gift_img: "ye_zaw_aung.png",
    gender: 0,
  },
  {
    name: "Yin Yin Aye",
    staff_id: "E-00173",
    profile_img: "yin_yin_aye.JPEG",
    gift_img: "yin_yin_aye.jpg",
    gender: 1,
  },
  {
    name: "Yi Mon Oo",
    staff_id: "E-00329",
    profile_img: "yi_mon_oo.JPEG",
    gift_img: "yi_mon_oo.jpeg",
    gender: 1,
  },
  {
    name: "Yoon Mie Mie Aung",
    staff_id: "E-00338",
    profile_img: "yoon_mie_mie_aung.png",
    gift_img: "yoon_mie_mie_aung.jpg",
    is_excluded: 1,
    gender: 1,
  },
  {
    name: "Yu Nandar Moe",
    staff_id: "E-00344",
    profile_img: "yu_nandar_moe.JPEG",
    gift_img: "yu_nandar_moe.jpg",
    gender: 1,
  },
  {
    name: "Zar Chi Pwint Phyu",
    staff_id: "E-00377",
    profile_img: "zar_chi_pwint_phyu.jpeg",
    gift_img: "zar_chi_pwint_phyu.jpg",
    gender: 1,
  },
  {
    name: "Zar Zar Win",
    staff_id: "E-00195",
    profile_img: "zar_zar_win.JPEG",
    gift_img: "zar_zar_win.jpg",
    gender: 1,
  },
  {
    name: "Zaw Khant Maung",
    staff_id: "E-00268",
    profile_img: "zaw_khant_maung.png",
    gift_img: "zaw_khant_maung.JPEG",
    gender: 0,
  },
  {
    name: "Zaw Win Tin",
    staff_id: "E-00389",
    profile_img: "zaw_win_tin.png",
    gift_img: "zaw_win_tin.png",
    gender: 0,
  },
  {
    name: "Zin Lin Ko",
    staff_id: "E-00216",
    profile_img: "zin_lin_ko.jpg",
    gift_img: "zin_lin_ko.jpeg",
    gender: 0,
  },
  {
    name: "Zin Mar Oo",
    staff_id: "E-00319",
    profile_img: "zin_mar_oo.jpg",
    gift_img: "zin_mar_oo.png",
    gender: 1,
  },
  {
    name: "Zin May Thu",
    staff_id: "E-00062",
    profile_img: "zin_may_thu.JPEG",
    gift_img: "special_gift_2.JPEG",
    is_excluded: 1,
    gender: 1,
    is_special: 1,
    is_for: 1,
    giftName: "Special Gift 2"
  },
  {
    name: "Zin Nwe Oo",
    staff_id: "E-00372",
    profile_img: "zin_nwe_oo.jpeg",
    gift_img: "zin_nwe_oo.JPG",
    gender: 1,
  },
  {
    name: "Zon Myat Noe",
    staff_id: "E-00328",
    profile_img: "zon_myat_noe.JPEG",
    gift_img: "zon_myat_noe.png",
    gender: 1,
  },
  {
    name: "Zune Thi Cho",
    staff_id: "E-00076",
    profile_img: "zune_thi_cho.png",
    gift_img: "sample_gift_01.jpg",
    is_excluded: 1,
    gender: 1,
  },
  {
    name: "Zun Pwint Phyu",
    staff_id: "E-00352",
    profile_img: "zun_pwint_phyu.png",
    gift_img: "zun_pwint_phyu.jpeg",
    gender: 1,
  },
];

const leaders = [
  "Khine Shwe Sin Aung",
  "Zin Mar Oo",
  "Saw Bala",
  "May Thin Lwin",
  "Aye Su Paing",
  "Kaung Soe San",
  "Thet Min Htun",
  "Aung Pyae Sone",
  "Kyant Khine",
  "Hein Htet Zaw",
  "Ei Mon San",
  "Htay Hlaing",
  "Pwint Phyu Oo",
  "Khin Marlar Myo",
  "Jimmy",
];

const members = [
  "Zune Thi Cho",
  "Thura Naing",
  "Hnin Wai Wai Aung",
  "Aung Linn Naing",
  "Thida Nwe",
  "Yamin Thaw",
  "Myint Marlar Wai",
  "Khin Pyae Sone",
  "Tun Myint Thein",
  "Thandar Oo",
  "Tharaphy Win Aung",
  "May Thae Oo",
  "Khine Khine Oo",
  "Khin Nandar Thein",
  "Thandar Aung",
  "Win Lhan Phyo",
  "Nwe Nwe Win Than",
  "Yin Yin Aye",
  "Khaing Min Tun",
  "Thu Zar Htwe",
  "May Zin Oo",
  "Htet Thinzar Mon",
  "Sein Moh Moh Zin",
  "Wai Wai Khaing-1",
  "Htet Aung",
  "Zar Zar Win",
  "Tin Zar Win",
  "Htet Htet Khine",
  "Yamin Aye",
  "Win Win Htay",
  "Soe Htet Aung",
  "Thein Naing Oo",
  "May Soe Thinzar Moe",
  "Zin Lin Ko",
  "Kaung Myat Thu",
  "Kaung Eain San Htay",
  "Nay Oo Thant",
  "Theint Thiri Swe",
  "Yamin Thu",
  "Lwin Mar Win",
  "Aung Kyaw Oo",
  "Yan Kyaw Min",
  "Nang Khat Mang",
  "Akary Thein",
  "May Thu Thu Oo",
  "Myat Thiha",
  "Nilar Win",
  "Kay Thi Nwe",
  "Thin Thin Moe",
  "Shoon Htet Oo",
  "Nant Thae Zarli Win",
  "Nyan Myo Htet",
  "Lin Htet Paing",
  "Myat Mon",
  "Si Thu Phyo",
  "Chit Su Su Hlaing",
  "Zaw Khant Maung",
  "Hsu Watty Nwe",
  "Min Htet Aung",
  "Htet Shine",
  "Si Thu Bo",
  "Aye Thandar Moe",
  "Myo Thandar Aung",
  "Naing Aung Lwin",
  "Htun Htun Myat",
  "Khaing Su Hlaing",
  "May Myat Mon",
  "Wutyi Theint",
  "Tin Naing Htun",
  "Tin Myat Win",
  "Hsaung Htet Htet Kyaw",
  "Khine Nyein Than",
  "Ei Mon Htun",
  "Min Khant Thu",
  "Mya Thet Chal",
  "Thiri Aung",
  "Mar Khaing Oo",
  "Pann Ei Khaing",
  "Phyo Htet Aung",
  "Aye Mya Mon",
  "Zon Myat Noe",
  "Yi Mon Oo",
  "Htet Htet Oo Wai",
  "Wai Wai Khaing-2",
  "Min Aung Paing",
  "Kaung Myat Thway",
  "May Thu Kyaw",
  "Yoon Mie Mie Aung",
  "Lily Maw",
  "Nandar Wutyi",
  "Phue Pwint Phway",
  "Yu Nandar Moe",
  "Swe Swe Aung",
  "Wah Wah Wynn Shwe Hlaing",
  "Theint Hayman Hnin",
  "Hnin Wai Yan",
  "Soe Minn Thant",
  "Khin Hmone Chal",
  "Su Myat Noe Oo",
  "Zun Pwint Phyu",
  "Htet Htoo Aung",
  "Su Lae Mon",
  "Ei Ei Tone",
  "Naw Khaing Khin Htoo Mon",
  "Chaw Chit Su Thwe",
  "Than Htike Aung",
  "Min Khant Kyaw",
  "Eaint Hmue Thapye",
  "Hsu Mon Lynn",
  "Aye Myat Thuzar Han",
  "Pyae Pyae Han",
  "Shoon Laat Pyae",
  "Nay Lin",
  "Kyi Myat Noe Soe",
  "Htet Tun Lu",
  "Khine Zin Thaw",
  "Zin Nwe Oo",
  "Htet Htet Oo",
  "May Myat Noe Oo",
  "Kay Zin Aung",
  "Aung Htet Lin",
  "Zar Chi Pwint Phyu",
  "Lwin Phyo Aung",
  "Khin Sandar Tun",
  "Nanda Hein",
  "Hnin Wai Lwin",
  "Sandar Moe",
  "Aye Myat Thu",
  "Phyo Su Paing",
  "Htet Htet Aung",
  "Kaung Khant Naing",
  "Nay Lin Htoo",
  "Zaw Win Tin",
  "May Thin Khaing",
  "Ye Zaw Aung",
  "Win Ngwe Phyo",
  "Khin Aye Aye Nyein",
  "May Thinzar",
  "Aye Myat Myat Khine",
  "Chan Myae Khin"
];

const meetlinks = [
  "https://meet.google.com/aaa-aaa-bbb",
  "https://meet.google.com/cad-owpr-cxg",
  "https://meet.google.com/vhv-yxbs-sky",
  "https://meet.google.com/koe-veyg-hse",
  "https://meet.google.com/tza-iggh-evb",
  "https://meet.google.com/zbp-bxze-mqs",
  "https://meet.google.com/goi-yewi-tyr",
  "https://meet.google.com/xgi-vqqb-rgj",
  "https://meet.google.com/rgo-nhim-jmd",
  "https://meet.google.com/fhp-tdro-zoj",
  "https://meet.google.com/ahs-dzqe-irn",
  "https://meet.google.com/msp-imsd-ute",
  "https://meet.google.com/bua-obvp-tii",
  "https://meet.google.com/sze-xwrp-qnr",
  "https://meet.google.com/vnv-mzkv-hex",
  "https://meet.google.com/voq-mouu-jmj",
];

var managers = [
  "Kyaw Soe Naing",
  "Thin Muyar Win",
  "Kyaw Htin Soe",
  "Yan Myo Aung",
  "Su Yee Win",
  "Shwe Yi Pyae Soan",
  "Myat Mon Thein",
  "Zin May Thu",
  "横内 慎太朗",
  "京和 将史",
  "中村 駿哉",
  "吉田 慎",
  "清水 美南海",
  "福井 隆介",
  "渡邊",
  "Aye Moh Moh Thu",
  "Htet Htet Aung",
  "Htet Htet Khine",
  "May Thu Khine Soe",
  "Cherry Zaw",
  "Chaw Su Su Nyein",
  "San Mya Thida",
];

const total_group_for_tenmembers = 5;
const max_member = 10;
const min_member = 9;