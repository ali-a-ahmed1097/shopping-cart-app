export default async function fetchImage(filename) {
    const response = await import(`./${filename}`);
    return response;
}