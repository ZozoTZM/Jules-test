export type Player = {
  name: string;
  team: string;
  position: 'Top' | 'Jungle' | 'Mid' | 'Bottom' | 'Support';
  pickRate: string;
  image: string;
  icon: string;
};

const players: Player[] = [
    { name: "Alex 'Alpha' Johnson", team: "Team Phoenix", position: "Top", pickRate: "25%", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDSatvvPId_-eXpedK6fs4BzYr7Ahi1RNI9MsTCL7MqObDi_zg8mweD2iXf0RUnfJts_VKRpMeY5c3qxFtyceyqpuUsuPsy30ipkosd2ZNZd_fF5GjDkqJJxaRxYhm3WIoFBl6QehXqoN_e_FKrMfijzpiTB2AMXOoCR8QL4kmtQkrMSaKIKuRGgwFy1d40YyujikRPuXZUT8oYwuVaGfQFefhAECmqIvovBu2iNWQ5LcL18kxOeHNNanxg6WW-JvBsklC4uZsZ3Y_Q", icon: "swords" },
    { name: "Ben 'Beta' Williams", team: "Team Nova", position: "Jungle", pickRate: "20%", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBgoZVYDsHBvgC3aaH2WQns1reH-B0Vq97K-NMOJ7gAPi_YsdQZzMegMft8Dnc7IxzV-fSQHV78dm21VW6kSCDeDQFy8rOrvwKhMaHO7CYmgxVE4UHsIPhQYhPyEvftnFwAwcXXGXNYQO8v0-CHXQoa2uGwrAj2aU184KFeCA1VMtJ4eIMDxI6lUjH5UhZT0758_92YE99FNcKXL0jOWyq1-qKFqTxNgjI7MO_CdW4-tcmWcvftBpMRt-5RmD8YyEO_iIl4e3BojKce", icon: "forest" },
    { name: "Chris 'Gamma' Davis", team: "Team Galaxy", position: "Mid", pickRate: "18%", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDurR6F2vdJ2Ix4sNqR34zLVcY0li57bO1kiLxsAGhZXbwxzwm5-8EBzp5F_vkn2zLugEvANa-dz6fjxu3O2SWvURpmAu1fsg9JlU2g1uBPavsPfxOymQap2iWh3kC8gG6JRKIGbM5ecf7a8rZZFDs9Cmv6V8BjhkuJlTdrCZEgz0CUK2qekwJb7ilwy41Tt7uRwdVVyfp8osBpL7ufFSQim9JkSC_lh2-zbOjF5kEoUSmByENWMqQhW_5V_UkNuNY3CFs1TWbApnI4", icon: "bolt" },
    { name: "David 'Delta' Miller", team: "Team Comet", position: "Bottom", pickRate: "15%", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB2Rldvtho_WyKsYU5dti--AVG3SWknG6ABIWWG4vAC1Kwem2d-mwyBIhTfGvsFM47k7Z4O9ppXbpGNXJ6RdIIqk98gVGWgmBlP7uLVM_Tqs3AL1_VElhNADH0yU5_D_YPinRxD-g-RygG9E73ODgnxItiUXm6cufo9wIHVXhQ1S04L29KTz7CTpULf04ErpBNeet5cfnS8a7d3WKBkc82n4SGnmrO6oE5TuEF9VjfXz_oi2XrozNeIGTZ-kC3UQW0nSPCWmAW0F70L", icon: "swords" },
    { name: "Ethan 'Epsilon' Wilson", team: "Team Nebula", position: "Support", pickRate: "12%", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCUgcUA-Fhjgl0MheiHtYlrSKnLBNB4czRblejgOGU2juXO3O4GHkO9AztEC_U0-hDjzCCKeNBQ91sgPVFdeDTESIVTMKPPKSGeV-9HwYiLcEhDk6nj8P1fkRPo47tj4_KvlWEfdOjgqY2y_Sn4ILfechUT6H_H2-JN7trtBe67Vb8ybRtVsWU7cK4qh7IkSfA_25QejJLz3lrhZRNxRc9hFiCM2w-8OG8T5rnO9ECyRMD2rKVlpj4RGx1lYOVgUTZPCA_CYkz1qy1m", icon: "health_and_safety" },
];

export const api = {
  getPlayers: (): Promise<Player[]> => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(players);
      }, 500);
    });
  }
};