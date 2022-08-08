import { PluginListenerHandle } from '@capacitor/core';

export interface IWebviewOverlayPlugin {
    /**
     * Open a webview with the given URL
     */
    open(options: OpenOptions): Promise<void>;

    /**
     * Close an open webview.
     */
    close(): Promise<void>;

    /**
     * Load a url in the webview.
     */
    loadUrl(options: {url: string}): Promise<void>;

    /**
     * Get snapshot image
     */
    getSnapshot(): Promise<{src: string}>;

    show(): Promise<void>;
    hide(): Promise<void>;

    toggleFullscreen(): Promise<void>;
    goBack(): Promise<void>;
    goForward(): Promise<void>;
    reload(): Promise<void>;
    
    handleNavigationEvent(options: {allow: boolean}): Promise<void>;

    updateDimensions(options: Dimensions): Promise<void>;

    evaluateJavaScript(options: {javascript: string}): Promise<{result: string}>;

    addListener(eventName: 'pageLoaded' | 'updateSnapshot' | 'progress' | 'navigationHandler', listenerFunc: (...args: any[]) => void): PluginListenerHandle;
}

export interface Cookie {
    domain: string;
    path: string;
    expires: string;
    name: string;
    value: string;
}

interface OpenOptions extends Dimensions {
    /**
     * The URL to open the webview to
     */
    url: string;

    javascript?: string;
    injectionTime?: ScriptInjectionTime;
    userAgent?: string;
    cookies: Cookie[];
}

interface Dimensions {
    width: number;
    height: number;
    x: number;
    y: number;
}

export enum ScriptInjectionTime {
    atDocumentStart,
    atDocumentEnd
}
