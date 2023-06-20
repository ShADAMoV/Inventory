import { createRouter, createWebHistory } from 'vue-router';
import InventoryPage from '@/components/1pages/IInventoryPage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'inventory-page',
      component: InventoryPage,
    },
  ],
});

export default router;
