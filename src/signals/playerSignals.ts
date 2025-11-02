import { signal, computed } from "@preact/signals";
import type { Player } from "../services/api";

export const players = signal<Player[]>([]);
export const activeFilter = signal('ALL');

export const filteredPlayers = computed(() => {
    if (activeFilter.value === 'ALL') {
        return players.value;
    }
    return players.value.filter(player => player.position.toUpperCase() === activeFilter.value);
});