import { useEffect } from 'react';

const useLoginScript = (url1, url2, url3) => {
    // 顺序引入三个外（下载后变内）部js文件
    useEffect(() => {
        const script1 = document.createElement('script');
        script1.src = url1;
        script1.async = false;
        document.body.appendChild(script1);

        const script2 = document.createElement('script');
        script2.src = url2;
        script2.async = false;
        document.body.appendChild(script2);

        const script3 = document.createElement('script');
        script3.src = url3;
        script3.async = false;
        document.body.appendChild(script3);
        
        return () => {
            document.body.removeChild(script3);
            document.body.removeChild(script2);
            document.body.removeChild(script1);
        };
    }, [url1, url2, url3]);
};

export default useLoginScript;
