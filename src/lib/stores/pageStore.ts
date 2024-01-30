// stores/pageStore.ts

import type { Content } from '$lib/types/content.type';
import type { Page } from '$lib/types/page.type';
import type { Text } from '$lib/types/text.type';
import { writable } from 'svelte/store';

export const pages = writable<Page[]>();
export const selectedPage = writable<Page>();
export const isPageStoreLoading = writable<boolean>(false);

export const contents = writable<Content[]>();
export const selectedContent = writable<Content>();


export const texts = writable<Text[]>();
export const selectedText = writable<Text>();


export const keywordSearchPageByName = writable<string>();

