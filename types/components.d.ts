declare type Recordable<T = any> = Record<string, T>;

interface Window {
  /**全局配置 */
  YhConfig: {
    /**是否有未保存的更改 */
    unsavedChanges: boolean;
    /**未保存的修改提示内容 */
    unsavedChangesMsg: string;
  };
}