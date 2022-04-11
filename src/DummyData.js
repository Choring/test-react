// 랜덤한숫자
function generateRandomId(n){
    const nums = new Array(n).fill(0) // 0으로 초기화
    return nums.map(n => Math.floor(Math.random()*10)).join("") // "12345"
}
//랜덤한 문자 생성
function generateRandomString(n){
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    const str = new Array(n).fill('a')
    return str.map(n => alphabet[Math.floor (Math.random()*alphabet.length)]).join("")
}

const dummyData = [
    {
        vidoeId: generateRandomId(16),
        videoName: generateRandomString(10),
        videoLength: generateRandomId(6),
        videoDescription: generateRandomString(100)
    },
    
    {
        vidoeId: generateRandomId(16),
        videoName: generateRandomString(10),
        videoLength: generateRandomId(6),
        videoDescription: generateRandomString(100)
    },
    
    {
        vidoeId: generateRandomId(16),
        videoName: generateRandomString(10),
        videoLength: generateRandomId(6),
        videoDescription: generateRandomString(100)
    },
    
    {
        vidoeId: generateRandomId(16),
        videoName: generateRandomString(10),
        videoLength: generateRandomId(6),
        videoDescription: generateRandomString(100)
    },
    
    {
        vidoeId: generateRandomId(16),
        videoName: generateRandomString(10),
        videoLength: generateRandomId(6),
        videoDescription: generateRandomString(100)
    },
    
]

export default dummyData;