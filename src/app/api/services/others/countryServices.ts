import { writeFile, readFile, access, constants } from 'fs/promises'

const REST_COUNTRIES_BASE_URL = 'https://restcountries.com/v3.1/all';
const CACHE_FILE_PATH = './src/app/api/services/others/countries_cache.json';

// CHECK LATER
// change all any to unknown
export const getAllCountries = async () => {
    // Check if we have the data cached
    if (await hasCache()) {
        const countries = await getCountriesFromCache();
        return extractOnlyCommonCountries(countries);
    }
    // If we don't have the data cached, fetch it from the API
    const countries = await fetchCountriesFromAPI();
    // Save the data to the cache
    await saveCountriesToFile(countries);
    return extractOnlyCommonCountries(countries);
}

const extractOnlyCommonCountries = (countries: unknown) => {
    console.log('Extracting common names of countries...');
    if (!Array.isArray(countries)) {
        throw new TypeError('Expected an array of countries');
    }

    const allCountries = countries.map((country: unknown) => {
        if (country.name && country.name.common) {
            return country.name.common;
        } else {
            throw new TypeError('Country data is missing "name.common" property');
        }
    });

    return Array.from(new Set(allCountries)).sort();
};

export const getAllLanguages = async () => {
    // Check if we have the data cached
    if (await hasCache()) {
        const countries = await getCountriesFromCache();
        return extractOnlyLanguages(countries);
    }
    // If we don't have the data cached, fetch it from the API
    const countries = await fetchCountriesFromAPI();
    // Save the data to the cache
    await saveCountriesToFile(countries);
    return extractOnlyLanguages(countries);
}

const extractOnlyLanguages = (countries: unknown) => {
    console.log('Extracting languages...');
    if (!Array.isArray(countries)) {
        throw new TypeError('Expected an array of countries');
    }

    const allLanguages = countries.map((country: unknown) => {
        if (country.languages) {
            return Object.values(country.languages);
        } else {
            return [];
        }
    }).flat();

    return Array.from(new Set(allLanguages)).sort();
}

const fetchCountriesFromAPI = async () => {
    try {
        console.log('Fetching data from API...');
        const response = await fetch(REST_COUNTRIES_BASE_URL);
        const data = await response.json();
        console.log('Data fetched successfully from API');
        return data;
    } catch (error) {
        console.error('Error:', (error as Error).message);
    }
}

const getCountriesFromCache = async () => {
    try {
        console.log('Reading data from countries.json...');
        const data = await readFile(CACHE_FILE_PATH, 'utf8');
        console.log('Data read successfully from countries.json');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error:', (error as Error).message);
    }
}

const saveCountriesToFile = async (countries: unknown) => {
    try {
        console.log('Saving data to countries.json...');
        await writeFile(CACHE_FILE_PATH, JSON.stringify(countries, null, 2));

        console.log('Data saved successfully to countries.json');
    } catch (error) {
        console.error('Error:', (error as Error).message);
    }
}

const hasCache = async () => {
    try {
        await access(CACHE_FILE_PATH, constants.F_OK);
        return true;
    } catch {
        return false;
    }
}