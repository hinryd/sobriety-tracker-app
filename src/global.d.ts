/// <reference types="@sveltejs/kit" />

interface Habit {
  name: string;
  type: 'money' | 'time' | 'event';
  averageLoss: number;
  createdAt: number;
  history: number[];
}
