function openModal(title, desc) {
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalDesc').innerText = desc;
    
    document.getElementById('mapaeModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('mapaeModal').style.display = 'none';
}


function showStamp(type) {
    // 모든 도장 이미지의 show 클래스를 제거하여 숨김
    const stamps = document.querySelectorAll('.stamp-img');
    stamps.forEach(stamp => {
        stamp.classList.remove('show');
    });

    // 클릭한 종류에 해당하는 도장만 찾아서 show 클래스 추가
    const targetStamp = document.getElementById('stamp-' + type);
    if (targetStamp) {
        targetStamp.classList.add('show');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // 따라다닐 이미지 요소를 찾습니다.
    const follower = document.getElementById('mouse-follower');

    // 화면에서 마우스가 움직일 때마다 실행됩니다.
    document.addEventListener('mousemove', function(e) {
        // 마우스의 X, Y 좌표를 가져와서 이미지의 위치로 지정합니다.
        follower.style.left = e.clientX + 'px';
        follower.style.top = e.clientY + 'px';
    });
});