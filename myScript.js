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