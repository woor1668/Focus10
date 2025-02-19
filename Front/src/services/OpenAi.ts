export const checkOpenAiKey = async (apiKey: string) => {
    try {
        const response = await fetch('https://api.openai.com/v1/engines', {
        headers: {
            'Authorization': `Bearer ${apiKey}`,
        },
        });

        if (response.ok) {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        console.error(error);
        return false;    
    };
}
    