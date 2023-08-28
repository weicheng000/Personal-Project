<template>
    <div class="header">
        <div class="logo"></div>
        <ul class="menu">
            <li class="menuItem">
                <p>菜單</p>
            </li>
            <li class="menuItem" @click="drop = !drop">
                <p>關於我們</p>
                <transition name="slide-fade">
                    <template v-if="drop === true">
                        <ul class="dropMenu" @click.stop>
                            <li class="menuItem">藍星故事</li>
                            <li class="menuItem">運營團隊</li>
                            <li class="menuItem">加入我們</li>
                        </ul>
                    </template>
                </transition>


            </li>
            <li class="menuItem">
                <p>最新消息</p>
                <ul style="display: none;">
                    <li class="menuItem">最新消息</li>
                    <li class="menuItem">最新活動</li>
                </ul>
            </li>
            <li class="menuItem">
                <p>線上預訂</p>
            </li>
            <li class="menuItem">
                <p>會員登入</p>
            </li>
        </ul>

    </div>
</template>
<script>
import gsap from "gsap";
import { onMounted, ref } from "vue";
export default {
    setup() {
        const drop = ref(false);
        onMounted(() => {
            gsap.fromTo(
                ".header", {
                opacity: 0,
                y: "-100%",
            }, {
                duration: 1,
                opacity: 1,
                ease: "power3.inOut",
                y: 0,
                delay: 0.5,
            }
            )
        })
        return {
            drop
        }
    }
}
</script>
<style lang="scss" scoped>
.header {
    width: 100%;
    height: 120px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px;
    box-sizing: border-box;

    .menu {
        display: flex;

        .menuItem {
            list-style: none;
            width: 100px;
            text-align: center;
            padding: 16px 16px;
            letter-spacing: 0.2em;
            cursor: pointer;
            position: relative;

            .dropMenu {
                position: absolute;
                top: 56px;
                left: 0;
            }
        }
    }

    .logo {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background-color: #333;
    }
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-40px);
  opacity: 0;
}
</style>