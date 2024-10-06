// 在文件开头添加
window.addEventListener('load', function() {
    document.getElementById('loader').style.display = 'none';
});

particlesJS("particles-js", {
    particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: "#ffffff" },
        shape: { type: "circle" },
        opacity: { value: 0.5, random: true },
        size: { value: 3, random: true },
        move: { enable: true, speed: 2, direction: "none", random: true, out_mode: "out" }
    }
});

// 平滑滚动效果
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 3D模型展示
function init3DModel() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 400 / 400, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(400, 400);
    document.getElementById('vr-headset').appendChild(renderer.domElement);

    // 加载3D模型
    const loader = new THREE.GLTFLoader();
    loader.load('models/vr_headset.gltf', (gltf) => {
        const model = gltf.scene;
        scene.add(model);

        // 调整模型位置和大小
        model.position.set(0, 0, 0);
        model.scale.set(0.5, 0.5, 0.5);

        // 添加环境光和平行光
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
        directionalLight.position.set(0, 1, 1);
        scene.add(directionalLight);

        camera.position.z = 5;

        function animate() {
            requestAnimationFrame(animate);
            model.rotation.y += 0.01;
            renderer.render(scene, camera);
        }
        animate();
    });
}

// 时间轴生成
function generateTimeline() {
    const timeline = document.querySelector('.timeline');
    const events = [
        { year: 2018, event: '公司成立' },
        { year: 2019, event: '首款VR产品发布' },
        { year: 2020, event: '拓展AR技术' },
        { year: 2021, event: '获得A轮融资' },
        { year: 2022, event: '用户突破100万' }
    ];

    events.forEach(item => {
        const eventElement = document.createElement('div');
        eventElement.className = 'timeline-event';
        eventElement.innerHTML = `
            <span class="year">${item.year}</span>
            <p>${item.event}</p>
        `;
        timeline.appendChild(eventElement);
    });
}

// 团队介绍生成
function generateTeam() {
    const team = document.querySelector('.team');
    const members = [
        { name: '张三', role: 'CEO', avatar: 'images/avatar1.png' },
        { name: '李四', role: 'CTO', avatar: 'images/avatar2.png' },
        { name: '王五', role: '首席设计师', avatar: 'images/avatar3.png' }
    ];

    members.forEach(member => {
        const memberElement = document.createElement('div');
        memberElement.className = 'team-member';
        memberElement.innerHTML = `
            <img src="${member.avatar}" alt="${member.name}">
            <h3>${member.name}</h3>
            <p>${member.role}</p>
        `;
        team.appendChild(memberElement);
    });
}

// 客户案例地图
function initClientMap() {
    // 这里可以使用地图API来实现客户案例地图
    console.log('客户案例地图初始化');
}

// 拖拽选择产品
function initDragDropProducts() {
    // 实现拖拽选择产品的逻辑
    console.log('拖拽选择产品功能初始化');
}

// AR演示
function initARDemo() {
    // 实现简单的AR效果演示
    console.log('AR演示初始化');
}

// 根据当前页面初始化相应的功能
function initPage() {
    const currentPage = window.location.pathname.split("/").pop();

    switch(currentPage) {
        case "products.html":
            init3DModel();
            initARDemo();
            break;
        case "about.html":
            generateTimeline();
            generateTeam();
            initClientMap();
            break;
        case "contact.html":
            initDragDropProducts();
            break;
        case "magic.html":
            initMagicPage();
            break;
        case "about.html":
            initAboutPage();
            break;
        case "contact.html":
            initContactPage();
            break;
        default:
            // index.html 或其他页面
            break;
    }
}

// 页面加载完成后的初始化函数
window.addEventListener('load', initPage);

// 懒加载图片
document.addEventListener("DOMContentLoaded", function() {
    var lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));

    if ("IntersectionObserver" in window) {
        let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    let lazyImage = entry.target;
                    lazyImage.src = lazyImage.dataset.src;
                    lazyImage.classList.remove("lazy");
                    lazyImageObserver.unobserve(lazyImage);
                }
            });
        });

        lazyImages.forEach(function(lazyImage) {
            lazyImageObserver.observe(lazyImage);
        });
    }
});

function initMagicPage() {
    // 可以在这里添加一些特定于气与魔法页面的JavaScript功能
    console.log('气与魔法页面初始化');
}

function initAboutPage() {
    // 初始化关于扶光页面的特定功能
}

function initContactPage() {
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            // 这里可以添加表单提交逻辑，比如发送到服务器或显示感谢信
            alert('感谢您的留言，我们会尽快回复！');
            form.reset();
        });
    }
}

// 修改 initPage 函数，确保它能正确初始化新页面
function initPage() {
    const currentPage = window.location.pathname.split("/").pop();

    switch(currentPage) {
        case "products.html":
            init3DModel();
            initARDemo();
            break;
        case "about.html":
            generateTimeline();
            generateTeam();
            initClientMap();
            break;
        case "contact.html":
            initDragDropProducts();
            break;
        case "magic.html":
            initMagicPage();
            break;
        case "about.html":
            initAboutPage();
            break;
        case "contact.html":
            initContactPage();
            break;
        default:
            // index.html 或其他页面
            break;
    }
}

// 在文件末尾添加以下函数
function initParallax() {
    window.addEventListener('scroll', function() {
        const layers = document.querySelectorAll('.parallax-layer');
        layers.forEach(layer => {
            const speed = layer.getAttribute('data-speed');
            const yPos = -(window.pageYOffset * speed);
            layer.style.transform = `translateY(${yPos}px)`;
        });
    });
}

// 在 initPage 函数中调用 initParallax
function initPage() {
    const currentPage = window.location.pathname.split("/").pop();

    switch(currentPage) {
        case "index.html":
        case "":  // 处理根路径
            initParallax();
            break;
        // ... 其他 case 语句保持不变
    }
}