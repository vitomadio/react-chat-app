const convertFilePath: Function = (fullPath: string): string => {
    return `gs://${process.env.REACT_APP_STORAGE_BUCKET}/${fullPath}`;
};

export default {
    convertFilePath,
};
