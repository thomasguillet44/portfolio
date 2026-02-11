<template>
    <div class="layout">
        <header class="header">
            <slot name="header"></slot>
        </header> 

        <main class="main-content">
            <slot name="main"></slot>
        </main>
        
        <footer class="footer">
            <slot name="footer"></slot>
        </footer>
    </div>
</template>
<style scoped>
.layout {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 30% 50% 20%;
    height: 100vh;
}

.header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.main-content {
    display: flex;
    justify-content: center;
}

.footer {
    display: flex;
    align-items: start;
    justify-content: center;
}
</style>