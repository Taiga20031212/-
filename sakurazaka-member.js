// Cookieからメンバーリストを取得
function getMembersFromCookie() {
    var membersCookie = document.cookie.split('; ').find(row => row.startsWith('members='));
    if (membersCookie) {
        return JSON.parse(decodeURIComponent(membersCookie.split('=')[1]));
    }
    return [];
}

// Cookieにメンバーリストを保存
function saveMembersToCookie(members) {
    document.cookie = "members=" + encodeURIComponent(JSON.stringify(members)) + "; path=/";
}

// 初期のメンバーリスト
var members = getMembersFromCookie();
if (members.length === 0) {
    members = [
        "上村莉菜",
        "小池美波",
        "齋藤冬優花",
        "井上梨名",
        "遠藤光莉",
        "大園玲",
        "大沼晶保",
        "幸阪茉里乃",
        "武元唯衣",
        "田村保乃",
        "藤吉夏鈴",
        "増本綺良",
        "松田里奈",
        "森田ひかる",
        "守屋麗奈",
        "山﨑天",
        "石森璃花",
        "遠藤理子",
        "小田倉麗奈",
        "小島凪紗",
        "谷口愛季",
        "中嶋優月",
        "的野美青",
        "向井純葉",
        "村井優",
        "村山美羽",
        "山下瞳月",
        "小林由依",
        "菅井友香",
        "渡邉理佐", 
    ];
    saveMembersToCookie(members);
}

// DOMにメンバーリストを表示
function updateMemberList() {
    var memberList = document.getElementById("memberList");
    memberList.innerHTML = ""; // 現在のリストをクリア
    members.forEach((member, index) => {
        var li = document.createElement("li");
        li.textContent = member;
        var deleteButton = document.createElement("button");
        deleteButton.textContent = "削除";
        deleteButton.onclick = function() {
            removeMember(index);
        };
        li.appendChild(deleteButton);
        memberList.appendChild(li);
    });
}

// メンバーをランダムに表示
function showRandomMember() {
    if (members.length > 0) {
        var randomIndex = Math.floor(Math.random() * members.length);
        document.getElementById("member").textContent = members[randomIndex];
    } else {
        document.getElementById("member").textContent = "メンバーがいません";
    }
}

// メンバーを追加
function addMember() {
    var newMember = document.getElementById("newMember").value.trim();
    if (newMember !== "") {
        members.push(newMember);
        saveMembersToCookie(members);
        updateMemberList();
        document.getElementById("newMember").value = "";
    } else {
        alert("メンバーの名前を入力してください");
    }
}

// メンバーを削除
function removeMember(index) {
    members.splice(index, 1);
    saveMembersToCookie(members);
    updateMemberList();
}

// 初期のメンバーリストを表示
updateMemberList();
