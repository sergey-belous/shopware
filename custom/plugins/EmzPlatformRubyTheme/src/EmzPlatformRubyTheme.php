<?php declare(strict_types=1);

namespace EmzPlatformRubyTheme;

use Shopware\Core\Framework\Plugin;
use Shopware\Storefront\Framework\ThemeInterface;

class EmzPlatformRubyTheme extends Plugin implements ThemeInterface
{
    public function getThemeConfigPath(): string
    {
        return 'theme.json';
    }
}