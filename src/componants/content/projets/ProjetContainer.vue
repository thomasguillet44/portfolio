<template>
    <div class="projet-wrapper">
        <div class="image-container">
            <a href="http://51.68.234.182:8081/" target="_blank">
                <img src="/boggle-screen.png" alt="Photo"/>
            </a>
        </div>
        <div class="description">
            Boggle
            <a href="https://github.com/thomasguillet44/boggle" target="_blank">
                <i class="icon-contact bi bi-github"></i>
            </a>
        </div>
    </div>
</template>
<style scoped>
.projet-wrapper {
    display: grid;
    grid-template-rows: 80% 20%;
    border: 3px solid #F5F5F5;
    border-radius: 5px;
}

.image-container {
    width: 100%;
    height: 100%;
    overflow: hidden;
    cursor: pointer;
}

.image-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: opacity 0.3s ease;
    opacity: 0.6;
}

.description {
    padding: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.icon-contact {
    display: inline-flex;
    font-size: 3vh;
}

.icon-contact:hover {
    transform: translateY(-3px);
}

.image-container:hover img {
    opacity: 1;
}
</style>