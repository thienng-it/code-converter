/**
 * Gemini AI-powered code converter
 * Handles conversion between CodeceptJS and Pytest using Google's Gemini API
 */

import { GoogleGenerativeAI } from '@google/generative-ai';
import { buildConversionPrompt } from './promptTemplates.js';

const MODEL_NAME = 'gemini-1.5-flash';

/**
 * Initialize Gemini AI client
 */
function initializeGemini(apiKey) {
    if (!apiKey) {
        throw new Error('API key is required');
    }
    return new GoogleGenerativeAI(apiKey);
}

/**
 * Extract code from markdown code blocks if present
 */
function extractCodeFromResponse(text) {
    // Remove markdown code blocks
    const codeBlockRegex = /```(?:python|javascript|js|py)?\n?([\s\S]*?)```/g;
    const matches = [...text.matchAll(codeBlockRegex)];

    if (matches.length > 0) {
        return matches[0][1].trim();
    }

    return text.trim();
}

/**
 * Validate input code is not empty
 */
function validateInput(code) {
    if (!code || code.trim().length === 0) {
        throw new Error('Input code cannot be empty');
    }
}

/**
 * Convert code using Gemini AI
 * 
 * @param {string} code - Source code to convert
 * @param {string} direction - Conversion direction: 'codeceptjs-to-pytest' or 'pytest-to-codeceptjs'
 * @param {string} apiKey - Gemini API key
 * @returns {Promise<string>} - Converted code
 */
export async function convertCode(code, direction, apiKey) {
    try {
        // Validate inputs
        validateInput(code);

        if (!['codeceptjs-to-pytest', 'pytest-to-codeceptjs'].includes(direction)) {
            throw new Error('Invalid conversion direction');
        }

        // Initialize Gemini
        const genAI = initializeGemini(apiKey);
        const model = genAI.getGenerativeModel({ model: MODEL_NAME });

        // Build prompt
        const prompt = buildConversionPrompt(code, direction);

        // Generate conversion
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const convertedCode = response.text();

        // Extract code from response (remove markdown if present)
        const cleanCode = extractCodeFromResponse(convertedCode);

        if (!cleanCode) {
            throw new Error('Conversion failed: empty response from AI');
        }

        return cleanCode;

    } catch (error) {
        // Enhanced error handling
        if (error.message?.includes('API_KEY_INVALID')) {
            throw new Error('Invalid API key. Please check your Gemini API key.');
        } else if (error.message?.includes('QUOTA_EXCEEDED')) {
            throw new Error('API quota exceeded. Please try again later or check your billing.');
        } else if (error.message?.includes('SAFETY')) {
            throw new Error('Content filtered by safety settings. Please modify your input code.');
        } else if (error.message?.includes('timeout')) {
            throw new Error('Request timeout. Please try again.');
        }

        // Re-throw with original message if not a known error
        throw error;
    }
}

/**
 * Validate API key format (basic check)
 */
export function validateApiKey(apiKey) {
    if (!apiKey || typeof apiKey !== 'string') {
        return false;
    }

    // Gemini API keys typically start with 'AIza' and are 39 characters
    return apiKey.length >= 20 && apiKey.trim().length > 0;
}

/**
 * Test API key by making a simple request
 */
export async function testApiKey(apiKey) {
    try {
        const genAI = initializeGemini(apiKey);
        const model = genAI.getGenerativeModel({ model: MODEL_NAME });

        // Simple test prompt
        const result = await model.generateContent('Say "OK"');
        const response = await result.response;

        return response.text().length > 0;
    } catch (error) {
        return false;
    }
}
