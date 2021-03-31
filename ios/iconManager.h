#if __has_include(<React/RCTBridgeModule.h>)
#import <React/RCTBridgeModule.h>
#else // Compatibility for RN version < 0.40
#import "RCTBridgeModule.h"
#endif
#if __has_include(<React/RCTLog.h>)
#import <React/RCTLog.h>
#else // Compatibility for RN version < 0.40
#import "RCTLog.h"
#endif

FOUNDATION_EXPORT NSString *const RNVIErrorDomain;

enum {
  RNVIGenericError = 1000,
};

@interface iconManager : NSObject <RCTBridgeModule>

- (NSString *)hexStringFromColor:(UIColor *)color;
- (NSString *)generateFilePath:(NSString *)glyph withFontName:(NSString *)fontName
                                                 withFontSize:(CGFloat)fontSize
                                                 withColor:(UIColor *)color
                                                 withExtraIdentifier:(NSString *)identifier;
- (BOOL)createAndSaveGlyphImage:(NSString *)glyph withFont:(UIFont *)font
                                                  withFilePath:(NSString *)filePath
                                                  withColor:(UIColor *)color;

@end
