const AWS = require("aws-sdk");


module.exports.run = async (event, context) => {
    // 오늘 날짜로 생성된 파일이..?
    // 오늘 날짜로 생성된 폴더가..?
    // json 사진 다운로드 받아
    // s3 업로드해
    // teams 알림 보내
        // teams 권한 있어야 하는 것 같던데..

    const created_at_string = "1706847037878";
    let created_at = new Date(Number(created_at_string));
    created_at.setHours(created_at.getHours() + 9);
    console.log(created_at);

    // const apiUri = "https://pf.kakao.com/rocket-web/web/v2/profiles/_icxfpxj";
    // fetch(apiUri)
    //     .then(response => {
    //         if (!response.ok) {
    //             throw new Error('Network response was not ok');
    //         }
    //         return response.json();
    //     })
    //     .then(data => {
    //         let cards = data["cards"];
    //         // card_array[0]에 있는 created_at 날짜 확인 => 의미 없음 그냥 업체 등록일인듯
    //         const created_at = cards[0]["created_at"];
    //         console.log(created_at);
    //         const createdAt = new Date(Number(created_at) * 1000);
    //         console.log(createdAt.toISOString());
    //         console.log(cards[0]["profile"]["profile_image"]["medium_url"]);
    //     })
    //     .catch(error => {
    //         console.error('Error:', error);
    //     });
};
