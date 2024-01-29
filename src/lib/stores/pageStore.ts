// stores/pageStore.ts

import type { Page } from '$lib/types/page.type';
import { writable } from 'svelte/store';

export const pages = writable<Page[]>();
export const selectedPage = writable<Page>();
export const keywordSearchPageByName = writable<string>();

export const isPageStoreLoading = writable<boolean>(false);
